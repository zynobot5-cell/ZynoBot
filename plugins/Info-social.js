import { performance } from 'perf_hooks';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix, command }) => {
    const socialText = `*📱 SOCIAL ZYNO*\n\n`
                    + `🌍 *Instagram:*\n`
                    + `https://www.instagram.com/zynobot.md?igsh=bHdvcG10bGFoeHo2`
                    + `📢 *TikTok:*\n`
                    + `tiktok.com/@endys8265`
                    + `💬 *GitHub:*\n`
                    + `https://github.com/zynobot5-cell/ZynoBot.git`

    await conn.sendMessage(
        message.chat,
        { text: socialText },
        { quoted: message }
    );
};

handler.help = ['social'];
handler.tags = ['info'];
handler.command = /^(social|socials)$/i;

export default handler;
