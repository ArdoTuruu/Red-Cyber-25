import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
 
    let anu = await fetch('https://betabotz-api.herokuapp.com/api/random/faktaunik?apikey=BetaBotz')
   let anu2 = await anu.json()
   let { result } = anu2
   let cap = `
β *Fakta unik:* 
      β₯ *${result}*
`
conn.sendButtonDoc(m.chat, cap, 'πππ€π­π ππ§π’π€ | ππ² πππ­πππΌπ­π³', 'ππππ', `${usedPrefix + command}`, m, adReply)
}
handler.command = /^(faktaunik)$/i

export default handler