function obj(obj){
    return Object.keys(obj).length === 0
}


const obj1 = {"x": 5, "y": 42}
const obj2 = {}


console.log(obj(obj2));
