const socket = io("http://localhost:3000/")
console.log(socket);

const NameInp = document.getElementById("name")
const MessageInp = document.getElementById("message")
const SendBtn = document.getElementById("send")
const Messages = document.getElementById("messages1")
const Groups = document.getElementById("Groups")

socket.on("from-server", (data)=>{
    const isMyMessage = data.from === NameInp.value;

    Messages.innerHTML += `
        <div class="${isMyMessage ? "message-right" : "message-left"}">
            <p><strong>${isMyMessage ? "Siz" : data.from}:</strong> ${data.message}</p>
        </div>
    `;
})


SendBtn.addEventListener("click", ()=>{
    const name = NameInp.value;
    const message = MessageInp.value;
    const selectedText = Groups.options[Groups.selectedIndex].text;


    const data = { message, from: name };
    socket.emit("send-message", data, selectedText);
})
