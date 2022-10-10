// By Ekuzika

import fetch from 'node-fetch'


let handler = async(m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, 'Proses...', ftrol)
  let res = await fetch(`https://ziy.herokuapp.com/api/asupan/bocil?apikey=xZiyy`)
  let vid = res.result.url
  conn.sendButton(m.chat, `Nih kak...`, author, vid, [
    ['Menu', `.? all`],
    ['Next', `${usedPrefix+command}`], 
], m)
}


handler.help = ['asupanbocil']
handler.tags = ['asupan']
handler.command = /^(asupanbocil|bocil)$/i

export default handler
