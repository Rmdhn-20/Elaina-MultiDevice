
import fetch from 'node-fetch'
import axios from 'axios'
// import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
	if (!text) throw `Link nya mana??`
	axios.get(`https://api-xcoders.site/api/download/ytmp4?url=${text}&apikey=cyXNcMnw3x`)
.then((res) => {
let video = res.result
let caption = `*${htki} YOUTUBE ${htka}*
*title:* ${res.result.title}
*viewers:* ${res.result.viewers}
*likes:* ${res.result.likes}
*size:* ${res.result.size}
*quality:* ${res.result.quality}
*published:* ${res.result.published_at}

`
await conn.sendMessage(m.chat, { video: { url: video.url }, caption: `${caption}` }, { quoted: m })
	})
	.catch(_ => m.reply(`Server restapi sedang error...`))
}


handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^y(outube(mp4|vdl)|t((mp4|v)|vdl))$/i

handler.exp = 0
handler.register = false

export default handler
