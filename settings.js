//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/piup

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: piu" //ur yt chanel name
global.socialm = "GitHub: Oyysreejan" //ur github or insta name
global.location = "India, Daimond, Kolkata" //ur location

//new
global.botname = '𝐐𝐮𝐞𝐞𝐧-𝐏𝐢𝐮' //ur bot name
global.ownernumber = '919874188403' //ur owner number
global.ownername = '𝐏𝐢𝐮' //ur owner name
global.websitex = "https://youtu.be/sreejanedit"
global.wagc = "https://chat.whatsapp.com/KIks9zxaRujBqDjNEQtY29"
global.themeemoji = '🪀'
global.wm = "𝙋𝙞𝙪."
global.botscript = '𝐔𝐧𝐥𝐨𝐜𝐤' //script link
global.packname = "𝐐𝐮𝐞𝐞𝐧"
global.author = "𝐏𝐢𝐮"
global.creator = "917439382677@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["917439382677"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
