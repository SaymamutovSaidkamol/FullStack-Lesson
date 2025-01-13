let user = {
    name: "John",
    location: "Uzbekiston",
    year: 2020,
    age: 11,
}

let UserProxy = new Proxy(user, {
    get(target, prop){
        console.log(`GET ${prop}`);

    },
    set(target, prop, value){
        target["fullname"] = target["fullname"] + value;

        regions = ['usa', 'russian', 'kareya', 'china']

        let count = 0
        for (let i = 0; i < regions.length; i++) {

            if (prop == "location" && "location" != regions[i]) {
                count++
            }
            console.log(regions[i]);

        }

        if (count == regions.length) {
            target[prop] = value
            return true
        }else{
            console.log("Bu mamlakatni qusha olmaysiz");

        }

        if (prop == 'age' && prop == 'location') {
            console.log("o'zgartirolmaysiz");
        }

    }
})

console.log(regions.length);