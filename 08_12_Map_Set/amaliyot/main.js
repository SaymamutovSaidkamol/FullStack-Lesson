let users = new Map();

function register(user){
    if(users.has(user.email)){
        console.log("Siz avval ro'yxatdan o'tib bo'lgansiz");
    }else{
        users.set(user.email, user)
        console.log(users);
    }
}


function login(user){
    let isHas = users.has(user.email);
    let findUser = users.get(user.email);
    if (isHas && findUser.password == user.password){
        console.log("Tizimga muvaffaqiyatli krldi");
    }else{
        console.log("Hisob topilmadi");
    }
}

function deleteAcount(user) {
    let isHas = users.has(user.email);
    let findUser = users.get(user.email);
    if (isHas && findUser.password == user.password){
        console.log("Tizim muvaffaqiyatli o'chirildi", users.delete(user.email, user.password));
        
    }else{
        console.log("Hisob topilmadi");
    }
}


register({email: "example@gmail.com", name: "Javohir", password: "12345"});
login()
deleteAcount()
