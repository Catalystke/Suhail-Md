const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_52_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieG9hc0lNN2tGdm5Va05SNDNmOVNCMHc0Zms4eU9wMkFFNlc3cDJLemMzbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVNTcHhaMm1Ucnl2UW8yQ1NOeDdMQVwiLFxuICBcInBob25lSWRcIjogXCI2NTk1N2Q5MS01Y2U4LTRjN2MtODFjZC1kNzFlYzQwYTU5OTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTQ5LFxuICAgICAgNjEsXG4gICAgICAxODQsXG4gICAgICAxNjAsXG4gICAgICAxMyxcbiAgICAgIDE1OSxcbiAgICAgIDQ5LFxuICAgICAgMTM2LFxuICAgICAgODQsXG4gICAgICAyMTcsXG4gICAgICA1MCxcbiAgICAgIDE1OCxcbiAgICAgIDU4LFxuICAgICAgMTg3LFxuICAgICAgMTg4LFxuICAgICAgMTEwLFxuICAgICAgMTkyLFxuICAgICAgMTkzLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDE1OCxcbiAgICAgIDIxMSxcbiAgICAgIDE3OCxcbiAgICAgIDE5MSxcbiAgICAgIDIyMixcbiAgICAgIDE1MCxcbiAgICAgIDQyLFxuICAgICAgNTUsXG4gICAgICA2NCxcbiAgICAgIDI1MCxcbiAgICAgIDMsXG4gICAgICAxNTUsXG4gICAgICA4NSxcbiAgICAgIDEzNixcbiAgICAgIDIxNixcbiAgICAgIDk1LFxuICAgICAgMjEzLFxuICAgICAgMjIzLFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1hBQ0hNTVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNjAwMjI3MjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkl0J3MgQnJpYW5cIixcbiAgICBcImxpZFwiOiBcIjE2MDM5MTc2MjA2MzUzOTozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMksxb1FIRUlhVmliVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjgzQ2pzTlF5ZzcxUXhCK0hNVXpYbW1ONkcya3JVMkRzSlozSTh5RTVpaEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2hYUm1UNnZuTFFpaDArcm44VHdESC9uMU5xdXZrQUpqcTBqN2M3TVp4dUhKYUtrR2drNElqRWxMT2I0dENsczg5YUxxeWs3UGxLcDh2dDA2OHE2Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUGJiYTRkWDNVWFhqSVpwT3o3cnJkcU1kZTAxR0RML3dDZUJMNnBGUXZFVUdXaWJqVFIyUFF6NFVwOVhBNytrc3l3NnRJKzFMYXFNUCt5cU1kRzBQQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA2MDAyMjcyOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkxMTk0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5CWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkJYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWEY0Y1B4L2psZUhhaTh6STVLWlNTbnNKWDNQbEowblNGc2I3dWRRNERBND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODg4ODQ3MTk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5MDYwMjA0NzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
