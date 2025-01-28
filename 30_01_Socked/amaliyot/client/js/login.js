let socket = io("http://localhost:4000/")

socket.on("connect", () =>{
    console.log("id --> ", socket.id);
})
                                