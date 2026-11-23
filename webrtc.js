let peer = null;
let channel = null;
let incoming = [];

function waitIceComplete(pc) {
    return new Promise(resolve => {
        if (pc.iceGatheringState === "complete") {
            resolve();
            return;
        }
        const check = () => {
            if (pc.iceGatheringState === "complete") {
                pc.removeEventListener("icegatheringstatechange", check);
                resolve();
            }
        };
        pc.addEventListener("icegatheringstatechange", check);
    });
}

function config() {
    return {
        iceServers: [{
            urls: "stun:stun.l.google.com:19302"
        }]
    };
}

window.host = async function () {
    peer = new RTCPeerConnection(config());
    channel = peer.createDataChannel("game");
    setupChannel(channel);
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    await waitIceComplete(peer);
    const signal = btoa(JSON.stringify(peer.localDescription));
    return location.origin + location.pathname + "#offer=" + encodeURIComponent(signal);
};

window.join = async function () {
    const hash = location.hash;
    if (!hash.startsWith("#offer=")) {
        alert("No offer");
        return;
    }
    const offerText = decodeURIComponent(hash.substring("#offer=".length));
    const offer = JSON.parse(atob(offerText));
    peer = new RTCPeerConnection(config());
    peer.ondatachannel = (event) => {
        channel = event.channel;
        setupChannel(channel);
    };
    await peer.setRemoteDescription(offer);
    const answer = await peer.createAnswer();
    await peer.setLocalDescription(answer);
    await waitIceComplete(peer);
    return btoa(JSON.stringify(peer.localDescription));
};

window.applyAnswer = async function (answerText) {
    const answer = JSON.parse(atob(answerText));
    await peer.setRemoteDescription(answer);
};

function setupChannel(ch) {
    ch.onopen = () => {
        console.log("channel open");
    };

    ch.onclose = () => {
        console.log("channel close");
    };

    ch.onmessage = (event) => {
        incoming.push(event.data);
    };
}

window.sendMsg = function (msg) {
    if (!channel) {
        return;
    } else if (channel.readyState !== "open") {
        return;
    } else {
        channel.send(msg)
    }
};

window.pollMsg = function () {
    if (incoming.length === 0) {
        return "";
    }
    return incoming.shift();
};
