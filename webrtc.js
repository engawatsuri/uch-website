let peer = null;
let conn = null;
let messages = [];

window.createRoom = async function () {
    return new Promise(resolve => {
        peer = new Peer();
        peer.on("open", id => {
            resolve(id);
        });
        peer.on("connection", connection => {
            conn = connection;
            setupConnection();
        });
    });
};

window.joinRoom = async function(roomId) {
    return new Promise((resolve, reject) => {
        peer = new Peer();
        peer.on("open", () => {
            conn = peer.connect(roomId);
            conn.on("open", () => {
                resolve(true);
            });

            conn.on("error", err => {
                reject(err);
            });
        });

        peer.on("error", err => {
            reject(err);
        });
    });
};

function setupConnection() {
    conn.on("data", data => {
        messages.push(data);
    });

    conn.on("close", () => {
        console.log("Disconnected");
    });
}

window.sendPacket = function(packet) {
    if(!conn || !conn.open) {
        return;
    }
    conn.send(packet);
};

window.pollPacket = function() {
    if(messages.length === 0) {
        return "";
    }
    return messages.shift();
};

window.isConnected = function() {
    return (conn && conn.open);
};
