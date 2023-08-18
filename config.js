const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, ''): '923096566451';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Dragon_Md:Dragon_Md@cluster1.0tlyzhm.mongodb.net/?retryWrites=true&w=majority" ;
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'textnow1pak@gmail.com' ;
global.github = 'https://github.com/naveeddogar/Dragon-MD' ;
global.location = 'Multan Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://youtube.com/c/Dragon-MD' ; // add your username
global.sudo =  process.env.SUDO || "923096566451" ;
global.devs = "923096566451"; //Dont change it From here
global.website = 'https://github.com/naveeddogar/Dragon-MD' ; //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/ZL4n6bK.jpeg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || '',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'Dragon-ᴍᴅ',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `It'x Naveed`,
  author:  process.env.PACK_AUTHER || '', 
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'true',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'false',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  readcmds : process.env.READ_COMMANDS || 'false',
  HANDLERS: process.env.PREFIX || ',',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Nh4iTxEH5k3vmHugFqoYktGM",
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ Dragon-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@Dragon-MD"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME || 'Dragon',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Dragon-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
