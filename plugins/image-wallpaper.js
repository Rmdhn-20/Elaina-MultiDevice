// Fix By Ekuzika

import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const textny = `wallpaper ${text}`
    const res = await googleImage(textny)
    let image = res.getRandom()
    let link = image
    conn.sendButton(m.chat, `
*${htki} ᴡᴀʟʟᴘᴀᴘᴇʀ sᴇᴀʀᴄʜ ${htka}*
🔎 *Result:* ${textny}
🌎 *Source:* Google
🔗 *Link:* ${link}
`, wm2, link, [
      ['Menu', `.? all`],
      ['Next', `${usedPrefix+command} ${text}`],
    ], m)
}
handler.help = ['wallpaper <query>']
handler.tags = ['downloader']

handler.command = /^(wallpaper)$/i

export default handler

