// By Ekuzika

import fetch from 'node-fetch'


let handler = async(m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, 'Proses...')
  let res = await fetch(`https://ziy.herokuapp.com/api/asupan/ukty?apikey=xZiyy`)
  let vid = res.result.url
  conn.senFile(m.chat, vid, 'ukhty.mp4', 'Nih kak . . .'.trim(), m)
}


handler.help = ['asupanhijaber']
handler.tags = ['asupan']
handler.command = /^(asupanhijaber|hijaber)$/i

export default handler
