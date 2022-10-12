let limit = 80
import fetch from 'node-fetch'
import axios from 'axios'
import { servers, ytv } from '../lib/y2mate.js'

let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command, isPrems, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args || !args[0]) throw 'Uhm... urlnya mana?'
try {
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title} = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE ${htka}*
*${htjava} Title:* ${title}
*${htjava} Filesize:* ${video.fileSizeH}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) await conn.sendButton(m.chat, `*${htki} YOUTUBE ${htka}*
*${htjava} Title:* ${title}
*${htjava} Filesize:* ${video.fileSizeH}`, title + '.mp4', await(await fetch(link)).buffer(), [['🎀 Menu', '/menu']], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    body: 'Size: ' + video.fileSizeH,
    containsAutoReply: true,
    mediaType: 2, 
    mediaUrl: args[0],
    showAdAttribution: true,
    sourceUrl: args[0],
    thumbnailUrl: thumbnail,
    renderLargerThumbnail: true,
    title: 'Nihh Kak, ' + name,
     }}
  })
  } catch {
	let res = await fetch(`https://api-xcoders.site/api/download/ytmp4?url=${args[0]}&apikey=cyXNcMnw3x`)
let v = await res.json()
let vidny = v.result.url
let surl = await fetch(`https://api-xcoders.site/api/tools/tinyurl?url=${vidny}&apikey=cyXNcMnw3x`)
let o = await surl.json()
let caption = `*${htki} YOUTUBE ${htka}*
*title:* ${v.result.title}
*viewers:* ${v.result.viewers}
*likes:* ${v.result.likes}
*size:* ${v.result.size}
*quality:* ${v.result.quality}
*published:* ${v.result.published_at}


_Jika kamu ingin mendownload sendiri, klik link dibawah:_
${o.result}
`
await conn.sendButtonVid(m.chat, vidny, `${caption}`.trim(), wm, 'Menu', '.? all', m)
  }
}


handler.help = ['ytmp4 <query>', 'mp4 <query>']
handler.tags = ['downloader']
handler.command = /^yt(v(idi?e?o)?|mp4)?$/i

handler.exp = 0
handler.register = false

export default handler
