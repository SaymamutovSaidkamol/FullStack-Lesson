// // console.log("Salom");
// const http = require("http");
// const url = require("url");

// let products = [
//     { id: 1, color: "red", category: 1 },
//     { id: 2, color: "black", category: 2 },
//     { id: 3, color: "blue", category: 3 },
//     { id: 4, color: "yellow", category: 4 },
//     { id: 5, color: "red", category: 5 },
//     { id: 6, color: "brown", category: 6 },
// ];

// let category = [
//     { id: 1, name: "Banana" },
//     { id: 2, name: "Mandarin" },
//     { id: 3, name: "Kivi" },
//     { id: 4, name: "Apelsin" },
//     { id: 5, name: "Ananas" },
//     { id: 6, name: "Kakos" },
// ];

// const server = http.createServer((req, res) => {
//     let path = url.parse(req.url, true);

//     if (path.pathname == "/products" && path.query.color) {
//         let filtered = products.filter((p) => p.color == path.query.color)
//         res.end(JSON.stringify(filtered))
//     }
//     else if (req.url== "/category") {
//         res.end(JSON.stringify(category))
//     }
//     else if (path.pathname == "/category" ) {
//         let filtered = products.filter((p) => p.id == path.query.id)
//         res.end(JSON.stringify(filtered))
//     }
//     else if (req.url == "/products") {
//         res.end(JSON.stringify(products))
//     }else{
//         res.end("Not Found")
//     }
// });

// server.listen(3000, () => {
//     console.log("Muvaffaqiyatlik");
// });
