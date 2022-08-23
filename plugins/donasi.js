let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Smartfren:* [08810072756]
┣➥ *Tri:* [-]
┣➥ *Dana:* [08810072756]
┣➥ *Saweria:* [-]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/628810072756*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
