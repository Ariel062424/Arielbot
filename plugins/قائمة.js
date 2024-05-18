let handler = async (m, { conn, args, usedPrefix, command }) => {
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: '*قـائـمـة الـاوامــر*'
          },
          body: {
            text: '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة'
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: 'اضغط هنا',
                  sections: [
                    {
                      title: '𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕',
                      highlight_label: '𝙼𝚛 𝙷𝚊𝚖𝚣𝚊',
                      image_url: './src/fg_logo.jpg', // Agrega la ruta de la imagen aquí
                      rows: [
                        {
                          header: 'معلومات البوت',
                          title: '.المطور',
                          description:  ,
                          id: '.'
                        },
                        {
                          header: 'قسم الاوامر',
                          title: '.الاوامر',
                          description:  ,
                          id: '.'
                        }
                      ]
                    }
                  ]
                }),
                messageParamsJson: '𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕',
              }
            ]
          }
        }
      }
    }
  }, {})
}

handler.help = [ info ]
handler.tags = [ main ]
handler.command = [ المهام ]
export default handler
