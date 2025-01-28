const { Telegraf } = require("telegraf")
const Telegram = require("./../models/tg_bot")

require("dotenv").config()

let token = process.env.TOKEN

let tg_bot = new Telegraf(token)

tg_bot.start(async (ctx) =>{
    
    try {
        let find = await Telegram.findOne({telegramID: ctx.from.id})
        
        if (!find) {
            let all = new Telegram({
                username: ctx.from.first_name,
                telegramID: ctx.from.id,
                userLanguage: ctx.from.language_code,
                isPrimium: ctx.from.is_premium
            })
            await all.save()
            ctx.reply(`Xush kelibsz ${ctx.from.first_name}😊`)
        }else{
            ctx.reply("Yangi bir bor kelganizdan xursandmiz😊")
        }
        
    } catch (error) {
        console.log(error);
        
    }
})

tg_bot.command("btn", (ctx) => {
    ctx.reply("Button message", {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "Google", url: "https://google.com"},
                    {text: "You Tube", url: "https://youtube.com"},
                    {text: "Git Hub", url: "https://github.com"},
                    {text: "Lit Code", url: "https://leetcode.com"}
            ]
        ]
}
}
)}
)

tg_bot.command("AllUser", async (ctx) =>{
    let my_id = "6958996923";
    let user_id = ctx.from.id

    console.log(user_id);
    
    user = await Telegram.findOne({user_id: my_id});

    if (!user) {
        console.log(true);
        
    }else{
        console.log(false);
        // ctx.reply("Siz Ochiqa emas")
    }
})

module.exports = tg_bot