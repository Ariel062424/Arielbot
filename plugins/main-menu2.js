//import db from  ../lib/database.js
import { promises } from  fs 
import { join } from  path 
import fetch from  node-fetch 
import { xpRange } from  ../lib/levelling.js 

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
◈ ━━━━ *𝑴𝒊𝒓𝒛𝒂  ┃ ᴮᴼᵀ* ━━━━ ◈ *${usedPrefix}*
┌─⊷ *𝑴𝒊𝒓𝒛𝒂* 
▢ 👋🏻 arمرحباً! *%*
▢ 👥 عدد المستخدمين : %totalreg
▢ 🟢 وقت النشاط : %muptime
%sbot
▢ 
└──────────────
`
    let pp = './src/fg_logo.jpg' 
      conn.sendButton2(m.chat, m2, mssg.ig, pp, [
      ['⦙☰ قائمة الاوامر', `${usedPrefix}menu`],
      ['⌬ جروب الدعم', `${usedPrefix}support`]
    ],m, rpyt)
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, null, rpl)

}

//handler.help = ['help']
//handler.tags = ['main']
handler.command = ['menu','اوامر'] 

export default handler
