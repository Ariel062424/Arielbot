let handler = async (m, { conn }) => {
  let name = conn.getName(m.sender)
  let image = './src/fg_logo.jpg'
  let imageCaption = conn.sendButton2(m.chat, pp, `${mssg.hi} *${name}* \n\n${mssg.bohelp} \n`, mssg.ig, null, [
    ['⦙☰ Menu' , '/menu' ],
    ['⦙☰ Menu 2' , '/menu2' ],
    [`⌬ ${mssg.gp}s`, '/support' ]
  ], m) // هذا هو وصف الصورة الذي سيحتوي على القائمة

  // إرسال الصورة مع الوصف الذي يحتوي على القائمة
  
}

handler.customPrefix = /^(bot|senna)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
