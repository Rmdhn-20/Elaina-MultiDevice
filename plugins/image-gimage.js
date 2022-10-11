// Fix By Ekuzika

import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendButton(m.chat, `
*${htki} ɢᴏᴏɢʟᴇ ɪᴍᴀɢᴇ ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
🔗 *Link:* ${link}
`, wm2, link, [
      ['Menu', `.? all`],
      ['Next', `${usedPrefix+command} ${text}`],
    ], m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i

export default handler

