let handler = async (m, { conn, args, usedPrefix, command }) => {
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title:  '*قـائـمـة الـاوامــر*' 
          },
          body: {
            text:  '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة' 
          },
          nativeFlowMessage: {
            buttons: [
              {
                name:  'single_select',
                buttonParamsJson: JSON.stringify({
                  title:  'اضغط هنا' ,
                  sections: [
                    {
                      title:  '𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕' ,
                      highlight_label:  '𝙼𝚛 𝙷𝚊𝚖𝚣𝚊' ,
                      rows: [
                        {
                          header:  'معلومات البوت' ,
                          title:  '.المطور' ,
                          description: ''  ,
                          id:  '/info' ,
                          image: {
                            url:  https://telegra.ph/file/f678a9cc2fa846b4d0110.jpg' ,
                            caption:  Image caption 
                          }
                        },
                        {
                          header:  'قسم الاوامر' ,
                          title:  '.الاوامر' ,
                          description: ''  ,
                          id:  '/menu' ,
                          image: {
                            url:  https://telegra.ph/file/f678a9cc2fa846b4d0110.jpg' ,
                            caption:  Image caption 2 
                          }
                        }
                      ]
                    }
                  ]
                }),
                messageParamsJson:  '𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕', 
              }
            ]
          }
        }
      }
    }
  }, {})
}

handler.help = [ 'info' ]
handler.tags = [ 'main' ]
handler.command = [ 'المهام' ]

export default handler
