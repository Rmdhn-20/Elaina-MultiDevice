// By Ekuzika

import fetch from 'node-fetch'


let handler = async(m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, 'Proses...', ftrol)
  let res = `https://betabotz-api.herokuapp.com/api/wallpaper/cogan?apikey=BetaBotz`
  conn.sendButton(m.chat, `Nih kak...`, author, res, [
    ['Menu', `.? all`],
    ['Next', `${usedPrefix+command}`], 
], m)
}


handler.help = ['cogan']
handler.tags = ['asupan']
handler.command = /^(cogan)$/i

export default handler
