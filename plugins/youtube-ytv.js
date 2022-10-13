
import fetch from 'node-fetch'
import axios from 'axios'
// import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {

	let res = await fetch(`https://api-xcoders.site/api/download/ytmp4?url=${args[0]}&apikey=cyXNcMnw3x`)
let v = await res.json()
let vidny = await (await fetch(v.result.url)).buffer()
let caption = `*${htki} YOUTUBE ${htka}*
*title:* ${v.result.title}
*viewers:* ${v.result.viewers}
*likes:* ${v.result.likes}
*size:* ${v.result.size}
*quality:* ${v.result.quality}
*published:* ${v.result.published_at}


_Jika kamu ingin mendownload sendiri, klik link dibawah:_
${vidny}
`
await conn.sendMessage(m.chat, { video: { url: vidny }, caption: caption }, m)
}


handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^y(outube(mp4|vdl)|t((mp4|v)|vdl))$/i

handler.exp = 0
handler.register = false

export default handler
