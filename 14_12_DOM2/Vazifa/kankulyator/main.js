const display = document.getElementById("display")
let delll = document.querySelector("#C")
let param = ""
function handleNumber(num) {
    param += num
    display.value = param

}

function resultShow() {
    let res = eval(param)
    display.value = res
}

delll.addEventListener("click", () => {
    param = ""
});
