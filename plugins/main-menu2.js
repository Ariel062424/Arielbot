
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

}

//handler.help = ['help']
//handler.tags = ['main']
handler.command = ['menu','اوامر'] 

export default handler
