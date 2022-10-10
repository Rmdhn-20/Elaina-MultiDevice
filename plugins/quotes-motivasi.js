//by Ekuzika
import axios from 'axios'


let handler = async(m, { conn, usedPrefix, command }) => {
  axios.get('https://betabotz-api.herokuapp.com/api/random/motivasi?apikey=BetaBotz')
  .then((res) => {
          let hasil = `${res.data.result}`
conn.sendButton(m.chat, hasil, author, [
    ['Next', `${usedPrefix+command}`], 
], m)
    })
        .catch(_ => m.reply('Server RestApi sedang error!'))
}


handler.help = ['motivasi']
handler.tags = ['quotes']
handler.command = /^(motivasi)$/i

export default handler
