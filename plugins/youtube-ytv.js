let limit = 80
import fetch from 'node-fetch'
import { servers, ytv } from '../lib/y2mate.js'
let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
	let restnya = await fetchJson(`https://api-xcoders.site/api/download/ytmp4?url=${args[0]}&apikey=cyXNcMnw3x`)
	let { title, channel_name, published_at, viewers, likes, comments, quality, size, duration, thumbnail, url } = restnya.result
	let tiny = await fetchJson(`https://api-xcoders.site/api/tools/tinyurl?url=${url}&apikey=cyXNcMnw3x`)
	let shorturl = tiny.result
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 
    conn.reply(isLimit ? `Ukuran File: ${size}\nUkuran file diatas ${limit}MB, silahkan download sendiri: ${shorturl}` : global.wait, m)
    m.reply(wait)
    if (!isLimit) await conn.sendButtonVid(m.chat, url, `*Title:* ${title}\n*Filesize:* ${size}\n*Duration:* ${duration}\n*Quality:* ${quality}\n*Viewers:* ${viewers}\n*Likes:* ${likes}`.trim(), wm, 'menu', '.?', m)
}
handler.help = ['ytmp4 <query>']
handler.tags = ['downloader']
handler.command = /^yt(v(idi?e?o)?|mp4)?$/i

handler.exp = 0
handler.register = false

export default handler


const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

