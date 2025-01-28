let ustun = document.getElementById("ustun")
let To_name = document.getElementById("to-name")
let inputs = document.querySelectorAll(".inp input");
let button = document.getElementById("button");

let socket = io("http://localhost:3000/");

let from_name
let to_name
let message

socket.on("chat message", (msg) => {
    console.log(msg); // Foydalanuvchi xabarini konsolda tekshiring
    ustun.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
            <td>1</td>
            <td id="name">${msg.username}</td>
            <td>${msg.createdAt}</td>
        </tr>
        `
    );
});
button.addEventListener("click", () => {

    for (let i = 0; i < inputs.length; i++) {

        if(i == 0){
            
            from_name = inputs[i].value
        }
        else if(i == 1){
            to_name = inputs[i].value
        }
        else{
            message = inputs[i].value
        }
    }
    
    // console.log(from_name);
    // console.log(message);
    // console.log(to_name);

    socket.emit("chat message", from_name, message, to_name)

    

});



ustun.addEventListener("click", (e)=>{
    // console.log(e.target.textContent);
    To_name.value = e.target.textContent
    
})