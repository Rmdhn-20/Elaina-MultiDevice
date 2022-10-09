//by Ekuzika
import axios from 'axios'


let handler = async(m, { conn, usedPrefix, command }) => {
  axios.get('https://betabotz-api.herokuapp.com/api/random/pantun?apikey=BetaBotz')
  .then((res) => {
          let hasil = `${res.data.result}`
conn.sendButton(m.chat, hasil, author, [
    ['Next', `${usedPrefix+command}`], 
], m)
    })
        .catch(_ => m.reply('Server RestApi sedang error!'))
}


handler.help = ['katadilan']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i

export default handler
