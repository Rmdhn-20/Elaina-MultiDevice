//by Ekuzika
import axios from 'axios'


let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example use ${usedPrefix}${command} <username>`
  axios.get('http://m.caliph.my.id/api/tiktokuser.php?usr=' + text)
  .then((res) => {
          let resnya = res.data.result
          let imgny = resnya.user.avatarLarger
          let hasil = `*> Username:* ${resnya.user.uniqueId}\n*> Fullname:* ${resnya.user.nickname}\n*> Id:* ${resnya.user.id}\n*> Verified:* ${resnya.user.verified}\n*> Private:* ${resnya.user.privateAccount}\n*> Followers:* ${resnya.stats.followerCount}\n*> Following:* ${resnya.stats.followingCount}\n*> Bio:* ${resnya.user.signature}\n`
conn.sendButton(m.chat, hasil, author, imgny, [
    ['Menu', `.? all`], 
], m)
    })
        .catch(_ => m.reply('Server RestApi sedang error!'))
}


handler.help = ['tiktokstalk', 'ttstalk'].map(v => v + ' <username>')
handler.tags = ['internet']
handler.command = /^(tiktok|tt)stalk$/i

export default handler
