import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  
  if (!text) throw `Link nya mana?`
  let res = await axios(`https://leyscoders-api.herokuapp.com/api/ytdl?url=${text}&apikey=dappakntlll`)
  let json = res.data
  let captionny = `*${htki} YOUTUBE ${htka}*
  *Title:* ${json.result.title}
  *Duration:* ${json.result.duration}
  *Viewers:* ${json.result.view}
  *Likes:* ${json.result.like}
  *Published:* ${json.result.published}
  
  `
  let video = json.result.url_video
  conn.sendFile(m.chat, video.buffer(), 'ytmp4.mp4', `${captionny}`.trim(), m)
}

handler.help = ['mp4', 'v2', ''].map(v => 'yt' + v2 + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^y(outube(mp4|vdl)|t((mp4|v)|vdl))2$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler

