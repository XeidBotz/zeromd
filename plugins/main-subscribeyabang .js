import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
	let url = 'https://telegra.ph/file/c78b2ae0ccc5e2b355623.jpg'
let wm = 'Hai saya Zero MD jangan lupa madang dan minum'
let cap = `*kaga ada yutub*`
	conn.sendButton(m.chat, cap, wm, await(await fetch(url)).buffer(), [['otw madang',`cuy`]],m)
}

handler.command = /^(zykomd)$/i
handler.premium = false
handler.limit = true

export default handler