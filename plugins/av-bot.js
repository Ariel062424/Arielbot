
let handler = async (m, av, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/fg_logo.jpg`  
      
      conn.sendButton2(m.chat, `${mssg.hi} *${name}* \n\n${mssg.bohelp} \n`, mssg.ig, av, null, [
      ['⦙☰ Menu', '/menu'],
      ['⦙☰ Menu 2', '/menu2'],
      [`⌬ ${mssg.gp}s`, '/support']
    ], m, av, rpyt) 
    conn.sendFile(m.chat, av, 'menu.jpg', null, m, rpl, true, { type: 'audioMessage', ptt: true })
   m.react('📃')
} 

handler.customPrefix = /^(bot|senna)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

