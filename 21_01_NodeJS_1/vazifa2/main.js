// masala-1
// const Number = require('./phone.js');

// const phone = "99890009492";

// console.log(Number(phone));



// masala-2
const {URL} = require("url");

let users = [
    {id:1, name: 'alex', year:2005, location:'usa', gender:'man'},
    { id: 2, name: 'sophia', year: 1992, location: 'canada', gender: 'woman' },
    { id: 3, name: 'michael', year: 1985, location: 'uk', gender: 'man' },
    { id: 4, name: 'emma', year: 1995, location: 'australia', gender: 'woman' },
    { id: 5, name: 'daniel', year: 1970, location: 'germany', gender: 'man' },
    { id: 6, name: 'olivia', year: 1993, location: 'france', gender: 'woman' },
    { id: 7, name: 'john', year: 1987, location: 'italy', gender: 'man' },
    { id: 8, name: 'amelia', year: 1965, location: 'spain', gender: 'woman' },
    { id: 9, name: 'james', year: 1989, location: 'japan', gender: 'man' },
    { id: 10, name: 'mia', year: 1958, location: 'brazil', gender: 'woman' }
]

function AllUsers(link){
    let url = new URL(link)

    if (url.pathname == "/users") {
        console.log(users);
    }

    users.forEach((e)=>{
        let users_age = 2025-e.year
        if (users_age == 20 && url.searchParams.get("age")) {
            console.log(e);
        }
        else if(e.gender == "man" && url.searchParams.get("gender")) {
            console.log(e);
        }
        else if(users_age > 45 && url.searchParams.get("pensiya") == "true") {
            console.log(e);
        }
    })

}

AllUsers(`https://test.uz/users?pensiya=true`)