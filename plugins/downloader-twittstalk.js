// By Ekuzika

import axios from 'axios'


let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example use ${usedPrefix}${command} <username>`
  axios.get(`https://api-xcoders.site/api/stalk/twitter?username=${text}&apikey=cyXNcMnw3x`)
  .then((res) => {
          let resny = res.data.result
          let hasil = `\n\n
          *> Username:* ${resny.username}
          *> Fullname:* ${resny.nickname}
          *> Followers:* ${resny.followers}
          *> Following:* ${resny.following}
          *> Bio:* ${resny.biography}
          *> Joined:* ${resny.join_at}\n\n`
          let pp = resny.profile
conn.sendButton(m.chat, hasil, wm2, pp, [
    ['Menu', `.? all`], 
], m)
    })
        .catch(_ => m.reply('Server RestApi sedang error!'))
}


handler.help = ['twitterstalk', 'twitstalk', 'stalktwit']
handler.tags = ['internet']
handler.command = /^(twit|twitter)stalk$/i

export default handler
