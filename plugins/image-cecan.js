// By Ekuzika

import fetch from 'node-fetch'


let handler = async(m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, 'Proses...', ftrol)
  let res = `https://ziy.herokuapp.com/api/cecan2k?apikey=xZiyy`
  conn.sendButton(m.chat, `Nih kak...`, author, res, [
    ['Menu', `.? all`],
    ['Next', `${usedPrefix+command}`], 
], m)
}


handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i

export default handler
