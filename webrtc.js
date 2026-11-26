let wasm_memory = null;
let peer = null;
let conn = null;
let messages = [];
let roomId = null;
let buf = null;

function setupConnection() {
    conn.on("data", data => {
        messages.push(data);
    });

    conn.on("close", () => {
        console.log("Disconnected");
    });
}

miniquad_add_plugin({
    register_plugin: function (importObject) {
        importObject.env.js_host = function () {
            peer = new Peer();
            peer.on("open", id => {
                roomId = id;
            });

            peer.on("connection", connection => {
                conn = connection;
                setupConnection();
            });
        };

        importObject.env.js_guest = function(ptr, len) {
            const bytes = new Uint8Array(wasm_memory.buffer, ptr, len);
            roomId = new TextDecoder().decode(bytes);
            peer = new Peer();
            peer.on("open", () => {
                conn = peer.connect(roomId);
                setupConnection();
            });
        };

        importObject.env.js_send = function(ptr, len) {
            if(!conn || !conn.open) {
                return;
            }
            const bytes = new Uint8Array(wasm_memory.buffer, ptr, len);
            let packet = new TextDecoder().decode(bytes);
            conn.send(packet);
        };

        importObject.env.js_poll_len = function() {
            if(messages.length === 0) {
                return 0;
            }
            buf = messages.shift();
            return buf.len();
        }

        importObject.env.js_poll = function(ptr) {
            const bytes = new TextEncoder().encode(buf);
            const memory = new Uint8Array(wasm_memory.buffer);
            memory.set(bytes, ptr);
        };

        importObject.env.js_is_connected = function() {
            return (conn && conn.open);
        };

        importObject.env.js_get_room_id_len = function() {
            if(!peerId) {
                return 0;
            }
            return peerId.len();
        }

        importObject.env.js_get_room_id = function(ptr) {
            const bytes = new TextEncoder().encode(peerId);
            const memory = new Uint8Array(wasm_memory.buffer);
            memory.set(bytes, ptr);
        }
    }

    on_init: function() {
        wasm_memory = Module.wasm_memory;
    }
});
