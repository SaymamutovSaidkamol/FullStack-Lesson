


// fetch('https://6764223a52b2a7619f5b899a.mockapi.io/test')
//     .then(res=> res.json())
//     .then(res=> console.log(res))

// function addNewProduct(){
//     fetch('https://6764223a52b2a7619f5b899a.mockapi.io/test', {
//         method: "Post",
//         body: JSON.stringify({
//             name: "test name", 
//         })
//     })
// }

// addNewProduct();

// function UpdateProduct(son){
//     fetch(`https://6764223a52b2a7619f5b899a.mockapi.io/test/${son}`, {
//         method: "PUT",
//         body: JSON.stringify({
//             name: "test name", 
//         })
//     })
// } 

// UpdateProduct(10);

// function DeleteProduct(son){
//     fetch(`https://6764223a52b2a7619f5b899a.mockapi.io/test/${son}`, {
//         method: "DELETE",
//         body: JSON.stringify({
//             name: "test name", 
//         })
//     })
// } 

// DeleteProduct(13);



async function getData(){
    let malumot = await axios.get(
        "https://6764223a52b2a7619f5b899a.mockapi.io/test"
    )
    console.log(malumot.data);
    
}

getData()


function createPRD(){
    axios.post("https://6764223a52b2a7619f5b899a.mockapi.io/test", {
        name: "Hello",
    })
}

// createPRD()


function UpdatePRD(){
    axios.put("https://6764223a52b2a7619f5b899a.mockapi.io/test/2", {
        name: "Salom",
    })
}

// UpdatePRD() 

function DelPRD(){
    axios.delete("https://6764223a52b2a7619f5b899a.mockapi.io/test/2")
}

DelPRD()