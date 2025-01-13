function start(){
    let userSelection = {
        user1: null, 
        user2: null,
    };
    
    const buttons = document.querySelectorAll("button");
    
    function setRandomChoice() {
        const randomIndex = Math.floor(Math.random() * buttons.length);
        const randomChoice = buttons[randomIndex].textContent;
        userSelection.user1 = randomChoice;
    }

    function getSavedSelections(){
        return JSON.parse(localStorage.getItem("selections")) || []
    }

    function saveSelection(newSelection) {
        const selections = getSavedSelections(); 
        selections.push(newSelection); 
        localStorage.setItem("selections", JSON.stringify(selections));
    }
    
    let WinUser1 = 0
    let WinUser2 = 0
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            userSelection.user2 = e.target.textContent;
            // console.log("Foydalanuvchi tanlovi (user2):",
            
            setRandomChoice();
            // user1 = kampyuter
            // user2 = men
            
            saveSelection({user1: userSelection.user1, user2:userSelection.user2});
            
            var h1Element = document.querySelector("#h1");
            var p1Element = document.querySelector("#p1");
            var p2Element = document.querySelector("#p2");
            var h2Element = document.querySelector("#h2");
            // let tosh = "🎲"
            // let qaychi = "✂️"
            // let qoqoz = "📜"
            let user1_tanlagan_tosh = ""
            let user2_tanlagan_tosh = ""
            if (userSelection.user1 == "Tosh") {
                user1_tanlagan_tosh = "🎲"
            }else if(userSelection.user1 == "Qaychi"){
                user1_tanlagan_tosh = "✂️"
            }else if(userSelection.user1 == "Qog'oz"){
                user1_tanlagan_tosh = "📜"
            }

            if (userSelection.user2 == "Tosh") {
                user2_tanlagan_tosh = "🎲"
            }else if(userSelection.user2 == "Qaychi"){
                user2_tanlagan_tosh = "✂️"
            }else if(userSelection.user2 == "Qog'oz"){
                user2_tanlagan_tosh = "📜"
            }

            if(userSelection.user2 == "Qog'oz" && userSelection.user1 == "Tosh"|| userSelection.user2 == "Qaychi" && userSelection.user1 == "Qog'oz" || userSelection.user2 == "Tosh" && userSelection.user1 == "Qaychi "){
                WinUser2 += 1
                h1Element.textContent = `Siz yutdingiz🎉`;
                p1Element.textContent = `Kamyuter tanlagan tosh:    ${user1_tanlagan_tosh} ${userSelection.user1}`;
                p2Element.textContent = `Siz tanlagan tosh:    ${user2_tanlagan_tosh} ${userSelection.user2}`;
                h2Element.textContent = `Xisob ${WinUser1}:${WinUser2}`;

            }else if(userSelection.user1 == "Tosh" && userSelection.user2 == "Qaychi" || userSelection.user1 == "Qaychi" && userSelection.user2 == "Qog'oz" || userSelection.user1 == "Qog'oz" && userSelection.user2 == "Tosh"){
                WinUser1 += 1
                h1Element.textContent = `Kampyuter yutdi😋`;
                p1Element.textContent = `Kamyuter tanlagan tosh:    ${user1_tanlagan_tosh} ${userSelection.user1}`;
                p2Element.textContent = `Siz tanlagan tosh:    ${user2_tanlagan_tosh} ${userSelection.user2}`;
                h2Element.textContent = `Xisob ${WinUser1}:${WinUser2}`;
                
            }else if(userSelection.user2 == "Qog'oz" && userSelection.user1 == "Qog'oz" || userSelection.user2 == "Tosh" && userSelection.user1 == "Tosh" || userSelection.user2 == "Qaychi" && userSelection.user1 == "Qaychi"){
                h1Element.textContent = "Durrang buldi😒";
                p1Element.textContent = `Kamyuter tanlagan tosh:    ${user1_tanlagan_tosh} ${userSelection.user1}`;
                p2Element.textContent = `Siz tanlagan tosh:    ${user2_tanlagan_tosh} ${userSelection.user2}`;
                h2Element.textContent = `Xisob ${WinUser1}:${WinUser2}`;
            }

            var h1Element = document.querySelector(".container .natija #title #h1");

            console.log(`kampyuter ${userSelection.user1}ni tanladi`);
            console.log(`Siz ${userSelection.user2}ni tanladingiz`);
            console.log(`Xisob ${WinUser1}:${WinUser2}\n\n\n\n`);
            
        });
    });
    
    const savedSelections = getSavedSelections()
    document.addEventListener("DOMContentLoaded", () => {
        setRandomChoice();
    });
}

start()