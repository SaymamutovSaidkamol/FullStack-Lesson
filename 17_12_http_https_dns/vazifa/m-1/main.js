// let word = "the quick brown fox jumps then quickly blow air"
// let word = "har qanday moddiy muhitda yozib olingan"
// let word = "asdbasdasda"

// for (let i = 0; i < word.length; i++) {
//     let count = 0
//     for (let j = 0; j < word.length; j++) {
//         if (word[j] == word[i]) {
//             count += 1
//         }
//     }
//     if (count == 1) {
//         console.log(word[i]);
//         break
//     }
    
// }

// ---------------------------------------------------------------

const writeTxt = document.querySelector("#write-text")
const searchBtn= document.querySelector("#search-letter")
const output= document.querySelector("#output-letter")

function outputTXT(){
    let txt = writeTxt.value.trim()
    txt = txt.toLowerCase()

    for (let i = 0; i < txt.length; i++) {
        let count = 0
        for (let j = 0; j < txt.length; j++) {
            if (txt[j] == txt[i]) {
                count += 1
            }
        }
        if (count == 1) {
            output.textContent = txt[i]
            console.log(txt[i]);
            break
        }
    }
}
searchBtn.addEventListener('click', outputTXT)
