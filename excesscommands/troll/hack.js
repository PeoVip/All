const { EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    name: 'hack',
    description: 'Hack the mentioned user. "its fake so no worries."',
    async execute(message, args) {
        const target = message.mentions.users.first();

        if (!target) {
            return await message.reply({ content: '**Please mention a user to hack!**' });
        }

        const initialReply = await message.channel.send({ content: `Đang chạy chương trình đánh cắp thông tin  **${target.tag}**..` });

        await simulateHackingProcess(message, target, initialReply);
    }
};

async function simulateHackingProcess(message, target, initialReply) {
    await wait(2500);
    await initialReply.edit({ content: `Chạy tiến trình để hack **${target}**..` });
      const devicePassword = generateRandomFromArray([
        `${target.tag}845!!`,
        `Gà Rán Cho Li Bi`,
        `Thịt Kho Tiêu`,
        `Cơm Rang Dưa Bò`,
        `Lòng Kho Khóm`,
        `Rau Muốn Xào Bò`,
        `Thịt Chiên`,
        `Đậu Hủ Nhồi Thịt`,
        `Bò Luck Lắc`,
        `Trứng Chiên`,
        `Trắng Lòng Đào Ngâm Tướng`,
        `Cá Chiên`
    ]);

  

    await initialReply.edit({ content: '', embeds: [embed] });
}

function generateRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
