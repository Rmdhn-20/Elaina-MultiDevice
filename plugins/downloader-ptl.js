// By Ekuzika

import fetch from 'node-fetch'


let handler = async(m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, 'Proses...', ftrol)
  let res = `https://ziy.herokuapp.com/api/asupan2k?apikey=xZiyy`
  conn.sendButton(m.chat, `Nih kak...`, author, res, [
    ['Menu', `.? all`],
    ['Next', `${usedPrefix+command}`], 
], m)
}


handler.help = ['ptl']
handler.tags = ['asupan']
handler.command = /^(ptl)$/i

export default handler
