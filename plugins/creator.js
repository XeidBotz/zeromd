import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'zeromods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Zero MD\nNICKNAME: Owner Zero MD\nORG: Zero MD\nTITLE:soft\nitem1.TEL;waid=6289529129992:+62 895-2912-9992\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://xeidgroup.my.id\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: indonesia@gmail.com\nitem3.X-ABLabel: Mail Owner Zero MD\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 ,Ya Gatau🗿\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya cuy`
    await conn.sendButton(m.chat, caption, author, null, [['sapa owner', 'sapaown']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'zykomods') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6283133329293:+62 895-2912-9992\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku cuy yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya `,m)
  }
}
handler.tags = ['info']
handler.command = /^(zeromods1|zeromods)$/i
export default handler