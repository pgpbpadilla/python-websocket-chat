(function () {



    function setupConnection() {
        const socket = new WebSocket('ws://localhost:8765');
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
        });
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });
        return socket;
    }

    function setupUIEvents(socket) {
        let sendBtn = document.querySelector('.compose button');
        sendBtn.addEventListener('click', (e) => {
            let messageBox = document.querySelector('.compose .message');
            let text = messageBox.value;
            console.log('Sent message', text);
            socket.send(text);
        });
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        console.log("DOM fully loaded and parsed");
        const socket = setupConnection();
        setupUIEvents(socket);
    });
})()
