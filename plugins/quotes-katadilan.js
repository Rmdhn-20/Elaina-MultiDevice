//by Ekuzika
import axios from 'axios'


let handler = async(m, { conn, usedPrefix, command }) => {
  axios.get('https://betabotz-api.herokuapp.com/api/random/katadilan?apikey=BetaBotz')
  .then((res) => {
          let hasil = `${res.data.dilan}`
conn.sendButton(m.chat, hasil, author, [
    ['Next', `${usedPrefix+command}`], 
], m)
    })
        .catch(_ => m.reply('Server RestApi sedang error!'))
}


handler.help = ['katadilan']
handler.tags = ['quotes']
handler.command = /^(katadilan|dilan)$/i

export default handler
