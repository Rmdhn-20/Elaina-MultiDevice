//by Ekuzika
import axios from 'axios'


let handler = async(m, { conn, usedPrefix, command }) => {
  axios.get('https://betabotz-api.herokuapp.com/api/random/fiersa?apikey=BetaBotz')
  .then((res) => {
          let hasil = `${res.data.fiersa}`
conn.sendButton(m.chat, hasil, author, [
    ['Next', `${usedPrefix+command}`], 
], m)
    })
        .catch(_ => m.reply('Server RestApi sedang error!'))
}


handler.help = ['fiersa']
handler.tags = ['quotes']
handler.command = /^(fiersa)$/i

export default handler
