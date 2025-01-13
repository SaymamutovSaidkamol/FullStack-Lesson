const http = require("http")
const url = require("url")

const fs = require("fs").promises;
const fs2 = require("fs")

async function readLoginFile() {
    try {
        let data = await fs.readFile("login.json", "utf-8");

        data = JSON.parse(data)

        const server = http.createServer((req, res) =>{
            let path = url.parse(req.url)
            let role = []
            let register_data = []

            if (path.pathname == "/login" && req.method == "GET") {
                res.end(JSON.stringify(data))
            }else if(path.pathname == "/register" && req.method == "POST"){
                let body = ""
                req.on("data", (ch)=>{
                    body+=ch
                    role = JSON.parse(body)
                    

                    if (role.role != "admin") {
                        console.log("Salom");
                        role.role = "user"
                    }

                })
                req.on("end", ()=> {
                    let new_prd = role
                    new_prd = { ...new_prd, id: data.length+1}
                    data.push(new_prd)
                    
                    register_data = JSON.parse(fs2.readFileSync("register.json", "utf-8"))
                    register_data.push(new_prd)
                    
                    let data2 = fs2.writeFileSync("register.json", JSON.stringify(register_data, null, 4), "utf-8")

                    // res.end(JSON.stringify(data))
                    // ---------------------------------------------------------------------------------
                    
                    register_data.forEach(e => {
                        // console.log(typeof(role.gmail), typeof(e.gmail));
                        // console.log(typeof(role.fullname), typeof(e.fullname));
                        // console.log(typeof(role.username), typeof(e.username));
                        // console.log(typeof(role.password), typeof(e.password));
                        
                        if (role.gmail == e.gmail && role.fullname == e.fullname && role.username == e.username && role.password == e.password) {
                            console.log("Bunday gmail lik user mavzud");
                            
                        }else{
                            console.log("Registratriyadan Muvaffaqilatlik o'tgazlildi");
                        }
                    });

                    // ---------------------------------------------------------------------------------
                })
            }else if(req.url.startsWith("/login") && req.method == "GET"){
                let [, , id] = path.pathname.split("/")
                res.end(JSON.stringify(register_data))
                console.log("Salom");
            }
            
        })
        server.listen(3000, ()=>{
            console.log("2000 port ushlamoqda");
        })

    } catch (err) {
        console.error("Faylni o'qishda xatolik yuz berdi:", err);
    }
}

readLoginFile(); 