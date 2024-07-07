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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349023434865";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_03_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgNixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDkzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExLFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZVHVKTjZyRXNLc2hxZVRBOHp2NXdJenlCTVg1c1o1d2J1L043NDBqdUVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjM0MzQ4NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFDNzk2RTFBNDZFNjZGMUZGMEEwQ0ZGQjdCNTBCQ0M1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM2ODIxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjM0MzQ4NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEzQzJFRTREMTUxQjEyNEI5MDNCQjZDRTJDNzVFMzg2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM2ODIxN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhWXRydWM3X1FteUh3N0JCNVNqYkhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyYzRlODA1LTQ0NzQtNDY0Yi1hYzZiLWNiMjYzNzA5ZDRlZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICA2OSxcbiAgICAgIDE5NSxcbiAgICAgIDEzNixcbiAgICAgIDUsXG4gICAgICAyNDAsXG4gICAgICAxNCxcbiAgICAgIDE5MyxcbiAgICAgIDIyLFxuICAgICAgMjUwLFxuICAgICAgNjUsXG4gICAgICA1MCxcbiAgICAgIDI3LFxuICAgICAgMTM0LFxuICAgICAgMzAsXG4gICAgICAxMDIsXG4gICAgICAxNzEsXG4gICAgICAyMjUsXG4gICAgICAxNzksXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAxNzMsXG4gICAgICAyMDksXG4gICAgICAxMDcsXG4gICAgICAxMTUsXG4gICAgICAxNjEsXG4gICAgICA4OCxcbiAgICAgIDg5LFxuICAgICAgMTQwLFxuICAgICAgMyxcbiAgICAgIDExMixcbiAgICAgIDI3LFxuICAgICAgNDIsXG4gICAgICAxMjIsXG4gICAgICAyMSxcbiAgICAgIDIxNixcbiAgICAgIDIwOCxcbiAgICAgIDI1MyxcbiAgICAgIDIwMixcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpKOEtMM0E5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIzNDM0ODY1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MjA5MzU1ODQ1NjU0NToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lidzQ3TUJFTkQ0cXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVk1hRy9ybDZKRFJvOWs5YnY3cU1RemJrTVV1YzZiQ2RwL3FXbnJZZmRsaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaa1c3SDRpWVBCRXNIRmt4V2VRakFHdnluU0NvZWFIcjR0OFBGaTduS3NhN3lOWXVBZy9BcC81bExSUW1NOFhJc2s5S2Z6RXN5TDNkTnJCZVhOSGhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxWE96MkNGTEhmOUFaTnRQOVNmb3Rlb3JTZzd2THNGYk5rY1BFMElJWW5BcVprK0g1REZIRHJhNmMxV1lZTW9SNnNIcU1lQUlwS1NOalRzM2pRKy9Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIzNDM0ODY1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzY4MjEyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
