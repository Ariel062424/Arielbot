const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
    if (message.body === '!menu') {
        let buttons = [
            {
                body: 'معلومات البوت'
            },
            {
                body: 'قائمة الاوامر'
            },
            {
                body: 'قناة البوت'
            }
        ];

        let buttonMessage = {
            text: 'مرحبا بك في 𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕',
            buttons: اضغط هنا
        };

        await message.reply(buttonMessage);
    }
});

client.initialize();
