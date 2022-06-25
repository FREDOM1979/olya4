/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '192e24e3a9b2',
}

// Other
global.owner = ['77072763560']
global.premium = ['77072763560']
global.packname = 'Ванилька'
global.author = 'Ванилька Bot'
global.sessionName = 'Ванилька'
global.prefa = ['#','!','.']
global.sp = '⭔'
global.mess = {
    success: '✓ ВЫПОЛНЕНО',
    admin: 'Эта функция предназначена только для администраторов группы!',
    botAdmin: '*Для выполнения этой команды, БОТ должен быть администратором группы!*',
    owner: '*Эта функция предназначена только для владельца!*',
    group: '*Функция используется только для групп!*',
    private: '*Функции, используемые только для приватного чата!*',
    bot: '*Эта функция предназначена только для бота!*',
    wait: '*ЗАГРУЖАЕТСЯ...*',
    endLimit: '*Срок действия дневного лимита истек, лимит будет обнуляться каждые 12 часов*',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
