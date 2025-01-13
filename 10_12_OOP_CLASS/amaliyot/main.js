

class User{

    #user = [
        {
            id: 1,
            name: "Saidkamol",
            age: 18
        },
        {
            id: 2,
            name: "Azamat",
            age: 17
        }
    ];

    findAll() {
        return this.#user
    }
    FindOne(id){

        let findUser = this.#user.find((val))
    }

    // create(){}
    // update(){}
    // delete(){}

}

let user = new User();
console.log(user.findAll());
console.log(user.FindOne(2));


// user.findAll();
// user.FindOne(1);
// user.create({name: "Murod", age: 21, group: "N15 NodeJs + ReactJs Bootcamp"});;
// user.update(2, {age: 21});

// user.delete(1);