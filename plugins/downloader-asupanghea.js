// By Ekuzika

import axios from 'axios'



let handler = async(m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, 'Proses...')
  let res = await getBuffer(`https://betabotz-api.herokuapp.com/api/asupan/gheayubi?apikey=BetaBotz`)
  conn.sendButtonVid(m.chat, res, `Nih kak...`, wm, 'Next', `${usedPrefix+command}`, m)
}


handler.help = ['asupanghea']
handler.tags = ['asupan']
handler.command = /^(asupanghea|ghea)$/i

export default handler

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
