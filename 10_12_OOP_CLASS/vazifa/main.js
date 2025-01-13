
let tanlash = +prompt("Register qilmoqchi bulsangiz 1 ni kriting\nLogin qilmoqchi bulsangiz 2 nu kriting")

if (tanlash == 1) {
  function addUser(newUser) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    users.push(newUser);
  
    localStorage.setItem("users", JSON.stringify(users));
  
    console.log("Foydalanuvchi qo'shildi:", newUser);
    console.log("Hozirgi foydalanuvchilar:", users);
  }

  let user_name = prompt("User name kriting")
  let password = prompt("Parol kriting")
  const newUser = {name: user_name, password: password}
  addUser(newUser);

}
else if(tanlash == 2)
  {
  let user_name = prompt("User name kriting")

  const users  =JSON.parse(localStorage.getItem("users"));
  const nameUser = users.find(user => user.name === user_name);
  if (nameUser) {
    console.log(nameUser);
  } else {
    console.log("Bunday ismli foydalanuvchi topilmadi.");
  }
}
else{
  confirm("Xatolik")
}



