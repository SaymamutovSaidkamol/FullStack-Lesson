import express from "express";
import fs from "fs";

if (!fs.existsSync("./db/data.json")) {
  fs.mkdirSync("./db");
  fs.writeFileSync("./db/data.json", JSON.stringify([]));
}

function getUsers() {
  return JSON.parse(fs.readFileSync("./db/data.json", "utf-8"));
}

let app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h6>Salom</h6>");
});

app.post("/register", (req, res) => {
  let { fullaname, username, password, gmail } = req.body;
  let users = getUsers();

  let checkUsername = users.find((val) => val.username == username);

  if (checkUsername) {
    res.status(200).send({ msg: "Already used username" });
    return;
  }

  let checkEmail = users.find((val) => val.gmail == gmail);

  if (checkEmail) {
    res.status(301).send({ msg: "Already exists email" });
    return;
  }

  if (!req.body.role) {
    req.body.role = "user";
  }

  let role = req.body.role;

  if (!(role == "user" || role == "admin")) {
    res.status(400).send({ msg: "Can't use this role" });
    return;
  }

  let item = {
    id: users.length == 0 ? 1 : users.at(-1).id + 1,
    ...req.body,
  };

  users.push(item);
  fs.writeFileSync("./db/data.json", JSON.stringify(users));

  res.status(201).send({ data: item });
});

app.post("/login", (req, res) => {
  let { username, password, role} = req.body;
  
  let users = getUsers();
  
  let findUser = users.find((val) => val.username == username);

  if (!findUser) {
    return res.status(404).send({ msg: "Not found username!" });
  }

  if (findUser?.password !== password) {
    return res.status(400).send({ msg: "Username or password wrong!" });
  }

  if (role == "admin" && findUser.role == role) {
    return res.send(users)
  }else if(role == "user"){
    return res.send(req.body)
  }
  else{
    return res.status(202).send("Siz admin emassiz yoki roleni xato kritdingiz")
  }

});

// app.listen(5000, () => {
//   console.log("Server 5000 chi porta ishlamoqda");
// });
