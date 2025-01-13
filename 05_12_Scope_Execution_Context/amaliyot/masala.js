let son = prompt("Son kriting: ")

console.log(son);

let bir = son % 10
let un = (parseInt(son/10))%10
let yuz = parseInt(son/100)
console.log(bir);
console.log(un);
console.log(yuz);

switch (yuz) {
    case 1:
        console.log("Bir Yuz " + " ");
        break
    case 2:
        console.log("Ikki Yuz"+ " ");
        break
    case 3:
        console.log("Uch Yuz"+ " ");
        break
    case 4:
        console.log("To'rt Yuz"+ " ");
        break
    case 5:
        console.log("Besh Yuz"+ " ");
        break
    case 6:
        console.log("Olti Yuz"+ " ");
        break
    case 7:
        console.log("Yetti Yuz"+ " ");
        break
    case 8:
        console.log("Sakkiz Yuz"+ " ");
        break
    case 9:
        console.log("To'qqiz Yuz"+ " ");
        break
}

switch (un) {
    case 1:
        console.log("O'n"+ " ");
        break
    case 2:
        console.log("Yigirma"+ " ");
        break
    case 3:
        console.log("O'ttiz"+ " ");
        break
    case 4:
        console.log("Qiriq"+ " ");
        break
    case 5:
        console.log("Ellik"+ " ");
        break
    case 6:
        console.log("Oltmish"+ " ");
        break
    case 7:
        console.log("Yetmish"+ " ");
        break
    case 8:
        console.log("Sakson"+ " ");
        break
    case 9:
        console.log("To'qson"+ " ");
        break
}

switch (bir) {
    case 1:
        console.log("Bir"+ " ");
        break
    case 2:
        console.log("Ikki"+ " ");
        break
    case 3:
        console.log("Uch"+ " ");
        break
    case 4:
        console.log("To'rt"+ " ");
        break
    case 5:
        console.log("Besh"+ " ");
        break
    case 6:
        console.log("Olti"+ " ");
        break
    case 7:
        console.log("Yetti"+ " ");
        break
    case 8:
        console.log("Sakkiz"+ " ");
        break
    case 9:
        console.log("To'qqiz"+ " ");
        break
}