const fs = require( fs );

let handler = async (m, { conn, args, usedPrefix, command }) => {
  const imageBuffer = fs.readFileSync( './src/fg_logo.jpg' );
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "*قـائـمـة الاوامــر*",
            image: {
              url:  "data:image/jpeg;base64",  + "imageBuffer.toString( base64 )",
              caption: "🛡️ قائمة الأوامر"
            }
          },
          body: {
            text: "🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة"
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                  title: "اضغط هنا",
                  sections: [
                    {
                      title: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕",
                      highlight_label: "𝙼𝚛 𝙷𝚊𝚖𝚣𝚊",
                      rows: [
                        {
                          header: "معلومات البوت",
                          title: ".المطور",
                          description: "",
                          id: "/الدعم"
                        },
                        {
                          header: "قسم الاوامر",
                          title: ".الاوامر",
                          description: "",
                          id: "/اوامر"
                        }
                      ]
                    }
                  ]
                }),
                messageParamsJson: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕"
              }
            ]
          }
        }
      }
    }
  }, {})
}
handler.help = ["info"]
handler.tags = ["main"]
handler.command = ["لسته"]
export default handler
