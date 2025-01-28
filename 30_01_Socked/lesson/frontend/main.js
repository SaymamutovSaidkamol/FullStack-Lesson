const socked = io("http://localhost:3000/")

const inp = document.getElementById("message")
const btn = document.getElementById("send")
const msgs = document.getElementById("messages1")

socked.on("from-server", (data)=>{
    console.log(data);
    msgs.innerHTML += `<h2>${data}<h2>`
})

btn.addEventListener("click", ()=>{
    socked.emit("send-message", inp.value)
    socked.emit("help", "alexksandr")
    socked.emit("lyuboy", {message: "Bu yangi habar", count: 12})
})

