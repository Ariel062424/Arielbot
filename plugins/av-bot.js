let handler = async (m, { conn }) => {
  let name = conn.getName(m.sender)
  let av = `./src/fg_logo.jpg`

  // إضافة إرسال الصورة هنا قبل إرسال القائمة
  conn.sendFile(m.chat, av, 'fg_logo.jpg', null, m, true, { type: 'audioMessage', ptt: true })

  conn.sendButton2(m.chat, `${mssg.hi} *${name}* \n\n${mssg.bohelp} \n`, mssg.ig, null, [
    ['⦙☰ Menu', '/menu'],
    ['⦙☰ Menu 2', '/menu2'],
    [`⌬ ${mssg.gp}s`, '/support']
  ], m)
}

handler.customPrefix = /^(bot|senna)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
