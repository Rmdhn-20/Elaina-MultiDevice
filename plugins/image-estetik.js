// By Ekuzika

import fetch from 'node-fetch'


let handler = async(m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, 'Proses...', ftrol)
  let res = `https://betabotz-api.herokuapp.com/api/wallpaper/aesthetic?apikey=BetaBotz`
  conn.sendButton(m.chat, `Nih kak...`, author, res, [
    ['Menu', `.? all`],
    ['Next', `${usedPrefix+command}`], 
], m)
}


handler.help = ['aesthetic', 'estetik']
handler.tags = ['internet']
handler.command = /^(aesthetic|estetik)$/i

export default handler
