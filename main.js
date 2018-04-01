(function () {

    function htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    function appendMessage(event) {
        let messageHtml = `
                <li class="message">
                    <div class="author">
                        John Peters
                    </div>
                    <div class="message">
                        ${event.data}
                    </div>
                    <div class="datetime">
                        Today at 123
                    </div>
                </li>`
        let pastMessages = document.querySelector('.history ul');
        let messsageBox = htmlToElement(messageHtml);
        pastMessages.appendChild(messsageBox);
    }

    function setupConnection() {
        const socket = new WebSocket('ws://localhost:8765');
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
        });
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
            appendMessage(event);
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
            messageBox.value = '';
        });
    }

    document.addEventListener("DOMContentLoaded", function(event) {
        console.log("DOM fully loaded and parsed");
        const socket = setupConnection();
        setupUIEvents(socket);
    });
})()
