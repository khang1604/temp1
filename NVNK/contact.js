export class Contact {
    render() {
        const home = document.getElementById('content');
        home.innerHTML = `
        <div class="contact">

            <ul>
                <li>Send email: nguyenkhang1642@gmail.com</li>
                <li>Call me: +84398963203</li>               
            </ul>

            <form>
                <input type="text" placeholder="Enter your name" id="name">
                <input type="text" placeholder="Enter your email">
                <textarea placeholder="Enter your message" id="message"></textarea>
                <div>Thank you for contacting me! I will reply as soon as possible.</div>
                <a id="send"><button type="button">Send message</button></a>
            </form>
            
        </div>
        `;
        
        const nameInput = document.getElementById("name");
        const messageInput = document.getElementById("message");
        const sendmail = document.getElementById("send");

        sendmail.addEventListener("click", function() {
        const name = nameInput.value;
        const message = messageInput.value;
        const mailto = "mailto:nguyenkhang1642@gmail.com?subject=Hello from " + name + "&body=" + message;
        sendmail.href = mailto;
        });
    }
}

