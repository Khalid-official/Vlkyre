// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
module.exports = {
  name: `musicside`,
  description: `ᴄʜᴇᴄᴋ 𝓜𝖎𝖟𝖚ӄ𝖎 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.MEE,
          },
          MessageType.image,
          {
            quoted: chat,
            mimetype: Mimetype.png || Mimetype.jpeg,
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
            caption: `*(c)Mïzµkï* _${vers.vers}_

•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}


┌────⭓ *𝙈𝙪𝙨𝙞𝙘*  ⦿
│🍫 ${ᴋᴇɪ}lyrics: _ꜰɪɴᴅ ʟʏʀɪᴄꜱ ᴏꜰ ꜱᴏɴɢꜱ_
│🍫 ${ᴋᴇɪ}ytaudio: _ᴅᴏᴡɴʟᴏᴀᴅ ᴀɴʏ ʏᴏᴜᴛᴜʙᴇ ᴀᴜᴅɪᴏ ᴜɴᴅᴇʀ 100ᴍʙ ꜱɪᴢᴇ._
│🍫 ${ᴋᴇɪ}ytsearch: _ɢᴇᴛ ʀᴇᴄᴏᴍᴍᴇɴᴅᴀᴛɪᴏɴꜱ ᴀɴᴅ ʟɪɴᴋꜱ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ_
│🍫 ${ᴋᴇɪ}ytvideo: _ᴅᴏᴡɴʟᴏᴀᴅ ᴀɴʏ ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴜɴᴅᴇʀ 50ᴍʙ ꜱɪᴢᴇ._
└───────────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
          }
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
