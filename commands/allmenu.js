const settings = require('../settings');

async function allMenu(sock, from, msg, session, commands) {
    // VIP Font Utility
    const toVIP = (text) => {
        const vipChars = {
            'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀', 'h': '𝗁', 'i': '𝗂', 'j': '𝗃', 'k': '𝗄', 'l': '𝗅', 'm': '𝗆', 'n': '𝗇', 'o': '𝗈', 'p': '𝗉', 'q': '𝗊', 'r': '𝗋', 's': '𝗌', 't': '𝗍', 'u': '𝗎', 'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓',
            'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦', 'H': '𝖧', 'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖫', 'M': '𝖬', 'N': '𝖭', 'O': '𝖮', 'P': '𝖯', 'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴', 'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹'
        };
        return text.split('').map(c => vipChars[c] || c).join('');
    };

    const header = `╭───  『 *𝐄𝐕𝐈𝐋 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃* 』  ───╮
│
│  💀 *USER:* ${msg.pushName || 'User'}
│  ⚡ *SPEED:* Ultra Fast
│  📊 *COMMANDS:* 400+
│  👑 *OWNER:* ${settings.ownerName}
│
╰───────────────────────────╯\n\n`;

    const categories = {
        '👑 OWNER PANEL': ['public', 'private', 'mode', 'owner', 'setname', 'block', 'unblock', 'bcgc', 'bcall', 'restart', 'shutdown', 'nuke', 'clear', 'backup', 'restore', 'clone', 'addsudo', 'delsudo', 'listsudo', 'setprefix', 'broadcast', 'self', 'autostatus', 'autoseen', 'autolike', 'autobio'],
        '👥 GROUP PANEL': ['kick', 'add', 'promote', 'demote', 'mute', 'unmute', 'tagall', 'hidetag', 'grouplink', 'groupinfo', 'join', 'leave', 'setdesc', 'setppgc', 'getbio', 'getdp', 'accept', 'poll', 'everyonemsg', 'listonline', 'tagme', 'mention', 'kickoffline', 'snipe', 'editmsg', 'react', 'send', 'forward', 'save', 'welcome', 'goodbye', 'setwelcome', 'setgoodbye', 'antilink', 'antidelete', 'antiviewonce', 'antifake', 'antispam', 'antibug', 'anticall', 'antistatus'],
        '🤖 AI COMMANDS': ['ai', 'chatbot', 'gali', 'chatgpt', 'gemini', 'llama', 'deepseek', 'flux', 'pixart', 'dalle', 'bingai', 'blackbox', 'imagine', 'midjourney', 'simi', 'brainly', 'math'],
        '⬇️ DOWNLOADER': ['song', 'video', 'insta', 'tiktok', 'facebook', 'youtube', 'pinterest', 'twitter', 'reddit', 'spotify', 'mf', 'apk', 'gdrive', 'ytdl', 'ytmp3', 'ytmp4', 'gitclone', 'threads', 'snapchat', 'capcut', 'terabox'],
        '🛠️ TOOL PANEL': ['ping', 'dp', 'vv', 'translate', 'base64', 'qr', 'shorturl', 'calc', 'weather', 'github', 'ipinfo', 'tempmail', 'fakeinfo', 'binlookup', 'whois', 'dnslookup', 'portscan', 'screenshot', 'define', 'google', 'wiki', 'yts', 'playstore', 'npm', 'sticker', 'toimg', 'tomp3', 'tts', 'blur', 'invert', 'crop', 'flip', 'grayscale', 'removebg', 'enlarge', 'runtime', 'uptime', 'serverinfo', 'speedtest', 'device', 'pdf', 'ocr', 'remini', 'enhance', 'upscale', 'find', 'location', 'time', 'search'],
        '🎉 FUN & GAMES': ['joke', 'meme', 'dare', 'truth', 'ascii', 'roast', 'compliment', 'ship', 'emojimix', 'character', 'quote', 'fact', 'trivia', 'coinflip', 'roll', 'riddle', 'wouldyourather', 'hack', 'report', 'spam', 'smsbomb', 'callbomb', 'crash', 'freeze', 'lag', 'bug', 'locspam', 'vcardspam', 'buttonspam', 'pollspam', 'contactspam', 'flirt', 'insult', 'pickup', 'tictactoe', '8ball', 'chess', 'hangman'],
        '🕌 ISLAMIC': ['quran', 'hadith', 'prayer', 'qibla', 'asmaulhusna', 'surah', 'ayat', 'tafsir', 'dua', 'azkar'],
        '🎌 ANIME ZONE': ['anime', 'manga', 'waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'slap', 'kill', 'happy', 'wink', 'poke', 'dance', 'cringe'],
        '🏢 LOGO MAKER': ['neon', 'glitch', 'gold', '3dtext', 'fire', 'water', 'galaxy', 'marvel', 'avengers', 'transformer', 'blackpink', 'gradient', 'luxury', 'royal', 'metal', 'steel', 'chrome', 'glossy'],
        '💎 PREMIUM': ['genimage', 'lookup', 'premium_ai', 'high_speed_ping', 'auto_reply_v2', 'secret_command']
    };

    let body = '';
    for (const [category, cmds] of Object.entries(categories)) {
        body += `╭───「 *${toVIP(category)}* 」\n`;
        cmds.forEach((cmd) => {
            body += `│  🚀 .${toVIP(cmd)}\n`;
        });
        body += `╰───────────────────\n\n`;
    }

    const footer = `> © 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐄𝐕𝐈𝐋 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃`;

    const fullMenu = header + body + footer;

    try {
        await sock.sendMessage(from, { 
            image: { url: settings.startimage }, 
            caption: fullMenu 
        }, { quoted: msg });
    } catch (e) {
        await sock.sendMessage(from, { text: fullMenu }, { quoted: msg });
    }
}

module.exports = allMenu;
