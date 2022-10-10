//https://github.com/Rlxfly/re-md (error)
// recode by ekuzika


import axios from 'axios'

let handler= async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Example use ${usedPrefix}${command} <username>`
    axios.get(`https://betabotz-api.herokuapp.com/api/stalk/ig?username=${args[1]}&apikey=BetaBotz`)
    .then((res) => {
        let hasilnya = res.data.result
        let sendny = `\n\n*> Username:* ${hasilnya.username}\n*> Fullname:* ${hasilnya.fullName}\n*> Followers:* ${hasilnya.followers}\n*> Following:* ${hasilnya.following}\n*> Post:* ${hasilnya.postsCount}\n*> Bio:* ${hasilnya.bio}\n\n`
        let pp = hasilnya.profilePicHD
        
        conn.sendButton(m.chat, sendny, author, pp, [
    ['Menu', `.? all`], 
], m)
    })
        .catch(_ => m.reply('Server RestApi sedang error!'))
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['internet']

handler.command = /^(igstalk)$/i

export default handler
