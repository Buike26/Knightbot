const _0x34f3b4=_0x47b6;function _0x47b6(_0x481d80,_0x1bd62f){const _0x55380=_0x5538();return _0x47b6=function(_0x47b6f5,_0x40b7d0){_0x47b6f5=_0x47b6f5-0xf7;let _0x26ea31=_0x55380[_0x47b6f5];return _0x26ea31;},_0x47b6(_0x481d80,_0x1bd62f);}(function(_0x3c0e6f,_0xa52218){const _0x3b9b2d=_0x47b6,_0x24e862=_0x3c0e6f();while(!![]){try{const _0xc9e213=parseInt(_0x3b9b2d(0x118))/0x1+parseInt(_0x3b9b2d(0x10a))/0x2*(parseInt(_0x3b9b2d(0x10f))/0x3)+parseInt(_0x3b9b2d(0x171))/0x4+-parseInt(_0x3b9b2d(0x151))/0x5*(parseInt(_0x3b9b2d(0x168))/0x6)+parseInt(_0x3b9b2d(0x139))/0x7*(-parseInt(_0x3b9b2d(0x12e))/0x8)+-parseInt(_0x3b9b2d(0x14d))/0x9*(parseInt(_0x3b9b2d(0x156))/0xa)+-parseInt(_0x3b9b2d(0x135))/0xb;if(_0xc9e213===_0xa52218)break;else _0x24e862['push'](_0x24e862['shift']());}catch(_0x1bbb3c){_0x24e862['push'](_0x24e862['shift']());}}}(_0x5538,0xec0bd));const settings=require('./settings'),chalk=require('chalk'),fs=require('fs'),path=require(_0x34f3b4(0x103)),{default:makeWASocket,useMultiFileAuthState,DisconnectReason}=require(_0x34f3b4(0x112)),P=require(_0x34f3b4(0x181));global[_0x34f3b4(0x189)]=settings[_0x34f3b4(0x189)],global[_0x34f3b4(0x184)]=settings[_0x34f3b4(0x184)],global['channelLink']=_0x34f3b4(0x152),global[_0x34f3b4(0x159)]=_0x34f3b4(0x110);const tagAllCommand=require(_0x34f3b4(0x136)),helpCommand=require(_0x34f3b4(0x169)),welcomeNewMembers=require(_0x34f3b4(0x161)),sayGoodbye=require(_0x34f3b4(0x16c)),banCommand=require(_0x34f3b4(0x13a)),promoteCommand=require(_0x34f3b4(0x17b)),demoteCommand=require(_0x34f3b4(0x130)),muteCommand=require('./commands/mute'),unmuteCommand=require(_0x34f3b4(0x108)),stickerCommand=require(_0x34f3b4(0xfa)),isAdmin=require('./helpers/isAdmin'),warnCommand=require(_0x34f3b4(0x13f)),warningsCommand=require(_0x34f3b4(0xfb)),ttsCommand=require(_0x34f3b4(0x167)),{tictactoeCommand,tictactoeMove}=require(_0x34f3b4(0x124)),{incrementMessageCount,topMembers}=require(_0x34f3b4(0x128)),ownerCommand=require('./commands/owner'),deleteCommand=require(_0x34f3b4(0x15d)),{handleAntilinkCommand,handleLinkDetection}=require('./commands/antilink'),memeCommand=require('./commands/meme'),tagCommand=require(_0x34f3b4(0x131)),jokeCommand=require('./commands/joke'),quoteCommand=require(_0x34f3b4(0x11e)),factCommand=require(_0x34f3b4(0x147)),weatherCommand=require('./commands/weather'),newsCommand=require(_0x34f3b4(0x149)),kickCommand=require(_0x34f3b4(0x160)),simageCommand=require('./commands/simage'),attpCommand=require(_0x34f3b4(0x11b)),{startHangman,guessLetter}=require(_0x34f3b4(0x14b)),{startTrivia,answerTrivia}=require('./commands/trivia'),{complimentCommand}=require(_0x34f3b4(0x14e)),{insultCommand}=require('./commands/insult'),{eightBallCommand}=require('./commands/eightball'),{lyricsCommand}=require('./commands/lyrics'),{dareCommand}=require(_0x34f3b4(0x15c)),{truthCommand}=require(_0x34f3b4(0x10e)),{clearCommand}=require(_0x34f3b4(0x13d)),dataDirectory=path['join'](__dirname,_0x34f3b4(0x132)),dataFile=path[_0x34f3b4(0x148)](dataDirectory,'userGroupData.json');function _0x5538(){const _0x31eec1=['mentionedJid','./commands/truth','3283086dbAGGU','Mr\x20Unique\x20Hacker','red','@whiskeysockets/baileys','Please\x20guess\x20a\x20letter\x20using\x20.guess\x20<letter>','close','text','Added\x20new\x20group:\x20','users','1810475LxniyM','.bot','Sorry,\x20only\x20group\x20admins\x20can\x20use\x20this\x20command.','./commands/attp','.topmembers','.kick','./commands/quote','.promote','warn','log','Please\x20provide\x20a\x20valid\x20number\x20of\x20minutes.','.truth','./commands/tictactoe','.meme','messages.upsert','.ban','./commands/topmembers','.clear','.help','split','key','@g.us','16BExNlW','Please\x20mention\x20one\x20player\x20to\x20start\x20a\x20game\x20of\x20Tic-Tac-Toe.','./commands/demote','./commands/tag','./data','.sticker','remove','7312943QXOndB','./commands/tagall','parse','output','1656207StvcMH','./commands/ban','Please\x20provide\x20a\x20valid\x20position\x20number\x20for\x20Tic-Tac-Toe\x20move.','existsSync','./commands/clear','group-participants.update','./commands/warn','Sending\x20broadcast\x20to\x20user:\x20','.tagall','add','.guess','some','Hi,\x20How\x20can\x20I\x20help\x20you?\x0aYou\x20can\x20use\x20.menu\x20for\x20more\x20info\x20and\x20commands.','.quote','./commands/fact','join','./commands/news','slice','./commands/hangman','quotedMessage','18HToLNL','./commands/compliment','stickerMessage','.tictactoe','5139175CbJMIs','https://whatsapp.com/channel/0029Va90zAnIHphOuO8Msp3A','🌟\x20This\x20is\x20a\x20global\x20broadcast\x20message\x20from\x20KnightBot!\x20Stay\x20tuned\x20for\x20updates.','.move','replace','7986250auZoHA','bot','.dare','ytch','.warnings','stringify','./commands/dare','./commands/delete','startsWith','error','./commands/kick','./commands/welcome','trim','message','isSenderAdmin','messages','participant','./commands/tts','6HvTGOv','./commands/help','user','filter','./commands/goodbye','toLowerCase','connection.update','.demote','length','7300432gbVhRX','.tts','contextInfo','groups','.trivia','.attp','green','Please\x20make\x20the\x20bot\x20an\x20admin\x20to\x20use\x20admin\x20commands.','remoteJid','extendedTextMessage','./commands/promote','readFileSync','Please\x20reply\x20to\x20a\x20sticker\x20with\x20the\x20.simage\x20command\x20to\x20convert\x20it.','.news','push','.tag','pino','🎉\x20Congrats!\x20The\x20bot\x20has\x20been\x20connected\x20successfully.','.hangman','author','Connected\x20to\x20WhatsApp!','Please\x20provide\x20an\x20answer\x20using\x20.answer\x20<answer>','.8ball','.list','packname','@s.whatsapp.net','fromMe','.unmute','.mute','.delete','.insult','./auth_info','creds.update','writeFileSync','./commands/sticker','./commands/warnings','Please\x20mention\x20users\x20to\x20ban.','includes','utf-8','Database\x20created\x20successfully.','Error\x20Creating\x20Database:','sendMessage','Added\x20new\x20user:\x20','path','action','endsWith','Sorry,\x20only\x20group\x20admins\x20can\x20use\x20the\x20.tagall\x20command.','.antilink','./commands/unmute','.simage','2agteHf','Please\x20specify\x20a\x20city,\x20e.g.,\x20.weather\x20London','conversation'];_0x5538=function(){return _0x31eec1;};return _0x5538();}!fs[_0x34f3b4(0x13c)](dataDirectory)&&fs['mkdirSync'](dataDirectory);let userGroupData={'users':[],'groups':[]};fs[_0x34f3b4(0x13c)](dataFile)?userGroupData=JSON[_0x34f3b4(0x137)](fs[_0x34f3b4(0x17c)](dataFile,_0x34f3b4(0xfe))):fs[_0x34f3b4(0xf9)](dataFile,JSON[_0x34f3b4(0x15b)](userGroupData,null,0x2));function saveUserGroupData(){const _0x38307a=_0x34f3b4;try{fs[_0x38307a(0xf9)](dataFile,JSON[_0x38307a(0x15b)](userGroupData,null,0x2)),console[_0x38307a(0x121)](_0x38307a(0xff));}catch(_0x4fa24c){console[_0x38307a(0x15f)](_0x38307a(0x100),_0x4fa24c);}}const globalBroadcastMessage=_0x34f3b4(0x153);async function sendGlobalBroadcastMessage(_0x54129c){const _0x238a6b=_0x34f3b4;if(userGroupData[_0x238a6b(0x174)][_0x238a6b(0x170)]===0x0&&userGroupData['users']['length']===0x0)return;for(const _0x311d1f of userGroupData[_0x238a6b(0x174)]){console[_0x238a6b(0x121)]('Sending\x20broadcast\x20to\x20group:\x20'+_0x311d1f),await _0x54129c[_0x238a6b(0x101)](_0x311d1f,{'text':globalBroadcastMessage});}for(const _0x1d848c of userGroupData[_0x238a6b(0x117)]){console[_0x238a6b(0x121)](_0x238a6b(0x140)+_0x1d848c),await _0x54129c['sendMessage'](_0x1d848c,{'text':globalBroadcastMessage});}}async function startBot(){const _0x21b809=_0x34f3b4,{state:_0x192a6d,saveCreds:_0x2dc56f}=await useMultiFileAuthState(_0x21b809(0xf7)),_0x48c1d1=makeWASocket({'auth':_0x192a6d,'printQRInTerminal':!![],'logger':P({'level':_0x21b809(0x120)})});_0x48c1d1['ev']['on'](_0x21b809(0xf8),_0x2dc56f),setInterval(async()=>{if(_0x48c1d1)await sendGlobalBroadcastMessage(_0x48c1d1);},0xc*0x3c*0x3c*0x3e8),_0x48c1d1['ev']['on'](_0x21b809(0x126),async _0x3fc35c=>{const _0x1691dd=_0x21b809,_0x23eb6c=_0x3fc35c[_0x1691dd(0x165)][0x0],_0x27378c=_0x23eb6c[_0x1691dd(0x12c)][_0x1691dd(0x179)],_0x57e4ab=_0x23eb6c['key'][_0x1691dd(0x166)]||_0x23eb6c[_0x1691dd(0x12c)][_0x1691dd(0x179)];if(!_0x23eb6c[_0x1691dd(0x163)])return;const _0xa202bd=_0x27378c[_0x1691dd(0x105)](_0x1691dd(0x12d));_0xa202bd?!userGroupData[_0x1691dd(0x174)][_0x1691dd(0xfd)](_0x27378c)&&(userGroupData[_0x1691dd(0x174)][_0x1691dd(0x17f)](_0x27378c),console[_0x1691dd(0x121)](_0x1691dd(0x116)+_0x27378c),saveUserGroupData()):!userGroupData[_0x1691dd(0x117)]['includes'](_0x27378c)&&(userGroupData[_0x1691dd(0x117)][_0x1691dd(0x17f)](_0x27378c),console['log'](_0x1691dd(0x102)+_0x27378c),saveUserGroupData());let _0x19eae6=_0x23eb6c[_0x1691dd(0x163)]?.[_0x1691dd(0x10c)]?.[_0x1691dd(0x162)]()[_0x1691dd(0x16d)]()||_0x23eb6c[_0x1691dd(0x163)]?.[_0x1691dd(0x17a)]?.[_0x1691dd(0x115)]?.['trim']()[_0x1691dd(0x16d)]()||'';_0x19eae6=_0x19eae6[_0x1691dd(0x155)](/\.\s+/g,'.')[_0x1691dd(0x162)]();if(!_0xa202bd&&(_0x19eae6==='hi'||_0x19eae6==='hello'||_0x19eae6===_0x1691dd(0x157))){await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x145)});return;}if(!_0x19eae6[_0x1691dd(0x15e)]('.'))return;const _0x117d27=[_0x1691dd(0x18d),'.unmute','.ban',_0x1691dd(0x11f),'.demote',_0x1691dd(0x11d),_0x1691dd(0x141),_0x1691dd(0x107)],_0x6da696=_0x117d27[_0x1691dd(0x144)](_0x34ec05=>_0x19eae6[_0x1691dd(0x15e)](_0x34ec05));let _0x3d2471=![],_0x161c70=![];if(_0xa202bd&&_0x6da696){const _0x297854=await isAdmin(_0x48c1d1,_0x27378c,_0x57e4ab);_0x3d2471=_0x297854[_0x1691dd(0x164)],_0x161c70=_0x297854['isBotAdmin'];if(!_0x161c70){await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x178)});return;}if(_0x19eae6['startsWith'](_0x1691dd(0x18d))||_0x19eae6===_0x1691dd(0x18c)||_0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x127))||_0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x11f))||_0x19eae6['startsWith'](_0x1691dd(0x16f))){if(!_0x3d2471&&!_0x23eb6c[_0x1691dd(0x12c)][_0x1691dd(0x18b)]){await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x11a)});return;}}if(_0x19eae6['startsWith'](_0x1691dd(0x11f))){const _0xe9d7d5=_0x23eb6c[_0x1691dd(0x163)][_0x1691dd(0x17a)]?.['contextInfo']?.[_0x1691dd(0x10d)]||[];await promoteCommand(_0x48c1d1,_0x27378c,_0xe9d7d5);}else{if(_0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x16f))){const _0x3ab72b=_0x23eb6c[_0x1691dd(0x163)][_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]?.[_0x1691dd(0x10d)]||[];await demoteCommand(_0x48c1d1,_0x27378c,_0x3ab72b);}}}if(!_0x23eb6c['key'][_0x1691dd(0x18b)])incrementMessageCount(_0x27378c,_0x57e4ab);switch(!![]){case _0x19eae6===_0x1691dd(0x109):{const _0x2e6b95=_0x23eb6c[_0x1691dd(0x163)]?.['extendedTextMessage']?.[_0x1691dd(0x173)]?.[_0x1691dd(0x14c)];_0x2e6b95?.[_0x1691dd(0x14f)]?await simageCommand(_0x48c1d1,_0x2e6b95,_0x27378c):await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x17d)});break;}case _0x19eae6[_0x1691dd(0x15e)]('.kick'):const _0x473954=_0x23eb6c[_0x1691dd(0x163)][_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]?.[_0x1691dd(0x10d)]||[];_0x473954[_0x1691dd(0x170)]>0x0?await kickCommand(_0x48c1d1,_0x27378c,_0x57e4ab,_0x473954,_0x23eb6c[_0x1691dd(0x163)]?.[_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]):await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':'Please\x20mention\x20a\x20user\x20to\x20kick.'});break;case _0x19eae6[_0x1691dd(0x15e)]('.mute'):const _0x2bdd09=parseInt(_0x19eae6[_0x1691dd(0x12b)]('\x20')[0x1]);isNaN(_0x2bdd09)?await _0x48c1d1['sendMessage'](_0x27378c,{'text':_0x1691dd(0x122)}):await muteCommand(_0x48c1d1,_0x27378c,_0x57e4ab,_0x2bdd09);break;case _0x19eae6===_0x1691dd(0x18c):await unmuteCommand(_0x48c1d1,_0x27378c,_0x57e4ab);break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x127)):const _0x7a635d=_0x23eb6c[_0x1691dd(0x163)][_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]?.[_0x1691dd(0x10d)]||[];_0x7a635d['length']>0x0?await banCommand(_0x48c1d1,_0x27378c,_0x57e4ab,_0x7a635d):await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0xfc)});break;case _0x19eae6===_0x1691dd(0x12a)||_0x19eae6==='.menu'||_0x19eae6===_0x1691dd(0x119)||_0x19eae6===_0x1691dd(0x188):await helpCommand(_0x48c1d1,_0x27378c,global['channelLink']);break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x133))||_0x19eae6[_0x1691dd(0x15e)]('.s'):await stickerCommand(_0x48c1d1,_0x27378c,_0x23eb6c);break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x15a)):const _0xe025fe=_0x23eb6c[_0x1691dd(0x163)][_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]?.[_0x1691dd(0x10d)]||[];await warningsCommand(_0x48c1d1,_0x27378c,_0xe025fe);break;case _0x19eae6[_0x1691dd(0x15e)]('.warn'):const _0x5f2cbb=_0x23eb6c['message'][_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]?.[_0x1691dd(0x10d)]||[];await warnCommand(_0x48c1d1,_0x27378c,_0x57e4ab,_0x5f2cbb);break;case _0x19eae6['startsWith'](_0x1691dd(0x172)):const _0x5b2c34=_0x19eae6[_0x1691dd(0x14a)](0x4)[_0x1691dd(0x162)]();await ttsCommand(_0x48c1d1,_0x27378c,_0x5b2c34);break;case _0x19eae6===_0x1691dd(0x18e)||_0x19eae6==='.del':await deleteCommand(_0x48c1d1,_0x27378c,_0x23eb6c,_0x57e4ab);break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x176)):await attpCommand(_0x48c1d1,_0x27378c,_0x23eb6c);break;case _0x19eae6==='.owner':await ownerCommand(_0x48c1d1,_0x27378c);break;case _0x19eae6===_0x1691dd(0x141):_0x3d2471||_0x23eb6c['key'][_0x1691dd(0x18b)]?await tagAllCommand(_0x48c1d1,_0x27378c,_0x57e4ab):await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x106)});break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x180)):const _0x2089de=_0x19eae6[_0x1691dd(0x14a)](0x4)[_0x1691dd(0x162)](),_0x46d378=_0x23eb6c[_0x1691dd(0x163)]?.[_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]?.[_0x1691dd(0x14c)]||null;await tagCommand(_0x48c1d1,_0x27378c,_0x57e4ab,_0x2089de,_0x46d378);break;case _0x19eae6['startsWith'](_0x1691dd(0x107)):await handleAntilinkCommand(_0x48c1d1,_0x27378c,_0x19eae6,_0x57e4ab,_0x3d2471);break;case _0x19eae6===_0x1691dd(0x125):await memeCommand(_0x48c1d1,_0x27378c);break;case _0x19eae6==='.joke':await jokeCommand(_0x48c1d1,_0x27378c);break;case _0x19eae6===_0x1691dd(0x146):await quoteCommand(_0x48c1d1,_0x27378c);break;case _0x19eae6==='.fact':await factCommand(_0x48c1d1,_0x27378c);break;case _0x19eae6[_0x1691dd(0x15e)]('.weather'):const _0x2de101=_0x19eae6[_0x1691dd(0x14a)](0x9)[_0x1691dd(0x162)]();_0x2de101?await weatherCommand(_0x48c1d1,_0x27378c,_0x2de101):await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x10b)});break;case _0x19eae6===_0x1691dd(0x17e):await newsCommand(_0x48c1d1,_0x27378c);break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x150)):const _0xbc1dcc=_0x23eb6c[_0x1691dd(0x163)][_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]?.['mentionedJid']||[];if(_0xbc1dcc[_0x1691dd(0x170)]===0x1){const _0x28cde6=_0x57e4ab,_0x5a20d8=_0xbc1dcc[0x0];tictactoeCommand(_0x48c1d1,_0x27378c,_0x28cde6,_0x5a20d8,_0xa202bd);}else await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x12f)});break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x154)):const _0x26bfec=parseInt(_0x19eae6[_0x1691dd(0x12b)]('\x20')[0x1]);isNaN(_0x26bfec)?await _0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x13b)}):tictactoeMove(_0x48c1d1,_0x27378c,_0x57e4ab,_0x26bfec);break;case _0x19eae6===_0x1691dd(0x11c):topMembers(_0x48c1d1,_0x27378c,_0xa202bd);break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x183)):startHangman(_0x48c1d1,_0x27378c);break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x143)):const _0x5390d5=_0x19eae6[_0x1691dd(0x12b)]('\x20')[0x1];_0x5390d5?guessLetter(_0x48c1d1,_0x27378c,_0x5390d5):_0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x113)});break;case _0x19eae6['startsWith'](_0x1691dd(0x175)):startTrivia(_0x48c1d1,_0x27378c);break;case _0x19eae6[_0x1691dd(0x15e)]('.answer'):const _0x569fd3=_0x19eae6['split']('\x20')[_0x1691dd(0x14a)](0x1)[_0x1691dd(0x148)]('\x20');_0x569fd3?answerTrivia(_0x48c1d1,_0x27378c,_0x569fd3):_0x48c1d1[_0x1691dd(0x101)](_0x27378c,{'text':_0x1691dd(0x186)});break;case _0x19eae6[_0x1691dd(0x15e)]('.compliment'):const _0x59afbb=_0x23eb6c[_0x1691dd(0x163)]['extendedTextMessage']?.[_0x1691dd(0x173)]?.['mentionedJid'][0x0];await complimentCommand(_0x48c1d1,_0x27378c,_0x59afbb);break;case _0x19eae6[_0x1691dd(0x15e)](_0x1691dd(0x18f)):const _0x55c2df=_0x23eb6c[_0x1691dd(0x163)][_0x1691dd(0x17a)]?.[_0x1691dd(0x173)]?.[_0x1691dd(0x10d)][0x0];await insultCommand(_0x48c1d1,_0x27378c,_0x55c2df);break;case _0x19eae6['startsWith'](_0x1691dd(0x187)):const _0x201da3=_0x19eae6[_0x1691dd(0x12b)]('\x20')[_0x1691dd(0x14a)](0x1)[_0x1691dd(0x148)]('\x20');await eightBallCommand(_0x48c1d1,_0x27378c,_0x201da3);break;case _0x19eae6[_0x1691dd(0x15e)]('.lyrics'):const _0x462359=_0x19eae6['split']('\x20')[_0x1691dd(0x14a)](0x1)['join']('\x20');await lyricsCommand(_0x48c1d1,_0x27378c,_0x462359);break;case _0x19eae6===_0x1691dd(0x158):await dareCommand(_0x48c1d1,_0x27378c);break;case _0x19eae6===_0x1691dd(0x123):await truthCommand(_0x48c1d1,_0x27378c);break;case _0x19eae6===_0x1691dd(0x129):if(_0xa202bd)await clearCommand(_0x48c1d1,_0x27378c);break;default:await handleLinkDetection(_0x48c1d1,_0x27378c,_0x23eb6c,_0x19eae6,_0x57e4ab);break;}}),_0x48c1d1['ev']['on'](_0x21b809(0x13e),async _0x304087=>{const _0x18a7f2=_0x21b809,_0x1c3ac2=_0x304087['id'],_0x1f6354=_0x48c1d1[_0x18a7f2(0x16a)]['id'][_0x18a7f2(0x12b)](':')[0x0]+_0x18a7f2(0x18a);try{if(_0x304087[_0x18a7f2(0x104)]===_0x18a7f2(0x134)){const _0x20293e=_0x304087['participants'];if(_0x20293e[_0x18a7f2(0xfd)](_0x1f6354))console['log']('Bot\x20has\x20been\x20removed\x20from\x20group:\x20'+_0x1c3ac2),userGroupData[_0x18a7f2(0x174)]=userGroupData[_0x18a7f2(0x174)][_0x18a7f2(0x16b)](_0x549878=>_0x549878!==_0x1c3ac2),saveUserGroupData();else{if(_0x20293e[_0x18a7f2(0x170)]>0x0)await sayGoodbye(_0x48c1d1,_0x1c3ac2,_0x20293e);}}else{if(_0x304087['action']===_0x18a7f2(0x142)){const _0x290704=_0x304087['participants'];if(_0x290704[_0x18a7f2(0x170)]>0x0)await welcomeNewMembers(_0x48c1d1,_0x1c3ac2,_0x290704);}}}catch(_0x1b2275){console[_0x18a7f2(0x15f)]('Error\x20handling\x20group\x20update:',_0x1b2275);}}),_0x48c1d1['ev']['on'](_0x21b809(0x16e),async _0x3ad9dd=>{const _0x3c0b73=_0x21b809,{connection:_0x45f2b1,lastDisconnect:_0x121182}=_0x3ad9dd;if(_0x45f2b1===_0x3c0b73(0x114)){const _0x19dafe=_0x121182[_0x3c0b73(0x15f)]?.[_0x3c0b73(0x138)]?.['statusCode']!==DisconnectReason['loggedOut'];_0x19dafe?await startBot():console[_0x3c0b73(0x121)](chalk[_0x3c0b73(0x111)]('Logged\x20out\x20from\x20WhatsApp.\x20Please\x20restart\x20the\x20bot\x20and\x20scan\x20the\x20QR\x20code\x20again.'));}else{if(_0x45f2b1==='open'){console[_0x3c0b73(0x121)](chalk[_0x3c0b73(0x177)](_0x3c0b73(0x185)));const _0x1ff41a=_0x48c1d1[_0x3c0b73(0x16a)]['id'];await _0x48c1d1[_0x3c0b73(0x101)](_0x1ff41a,{'text':_0x3c0b73(0x182)});}}});}startBot();