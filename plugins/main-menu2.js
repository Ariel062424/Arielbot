
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
◈ ━━━━ *𝑴𝒊𝒓𝒛𝒂  ┃ ᴮᴼᵀ* ━━━━━ ◈ *${usedPrefix}*
 👋🏻 مرحباً! : %name
 👥 عدد المستخدمين : %totalreg
 🟢 وقت النشاط : %muptime%sbot
▢ 
└──────────────
`
     let pp = './src/fg_logo.jpg' 
      conn.sendButton2(m.chat, `${mssg.hi} *${name}* \n\n${mssg.bohelp} \n`, mssg.ig, null, pp [
      ['⦙☰ Menu', '/menu'],
      ['⦙☰ Menu 2', '/menu2'],
      [`⌬ ${mssg.gp}s`, '/support']
    ], m) 
 
}

handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu','اوامر'] 

export default handler
