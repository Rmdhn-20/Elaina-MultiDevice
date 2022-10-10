// By Ekuzika

import fetch from 'node-fetch'


let handler = async(m, { conn, usedPrefix, command }) => {
  conn.reply(m.chat, 'Proses...')
  let res = await getBuffer(`https://ziy.herokuapp.com/api/asupan2k?apikey=xZiyy`)
  conn.sendButtonVid(m.chat, res, `Nih kak...`, wm, 'Next', `${usedPrefix+command}`, m)
}


handler.help = ['ptl']
handler.tags = ['asupan']
handler.command = /^(ptl)$/i

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

