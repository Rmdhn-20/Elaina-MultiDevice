//by Ekuzika
import axios from 'axios'


let handler = async(m, { conn, usedPrefix, command }) => {
  axios.get('https://betabotz-api.herokuapp.com/api/random/katailham?apikey=BetaBotz')
  .then((res) => {
          let hasil = `${res.data.hasil}`
conn.sendButton(m.chat, hasil, author, [
    ['Next', `${usedPrefix+command}`], 
], m)
    })
        .catch(_ => m.reply('Server RestApi sedang error!'))
}


handler.help = ['katailham']
handler.tags = ['quotes']
handler.command = /^(katailham)$/i

export default handler
