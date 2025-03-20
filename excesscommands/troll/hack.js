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
        `Thịt Chiên`
        `Đậu Hủ Nhồi Thịt`,
        `Bò Luck Lắc`,
        `Trứng Chiên`,
        `Trắng Lòng Đào Ngâm Tướng`,
        `Cá Chiên`
    ]);

  
    const embed = new EmbedBuilder()
        .setAuthor({ iconURL: message.client.user.displayAvatarURL({ dynamic: true}), name: `${message.client.user.username} Đang đánh cắp thông tin` })
        .setColor('#0099ff')
        .setTitle(`**${target.tag}** Dưới đây là tất cả thông tin ...`)
        .addFields(
            { name: `> Device Password:`, value: `\`\`Device Password: ${devicePassword}\`\`` , inline: true},
            { name: `> ID:`, value: `\`\`ID: ${id}\`\``, inline: true },
            { name: `> Wifi-name & Password:`, value: `\`\`Wifi-name: ${wifiName} \nWifi-password: ${wifiPassword}\`\``, inline: true },
            { name: `> Location:`, value: `\`\`${location}\`\``, inline: true },
            { name: `> Name:`, value: `\`\`Name: ${target.tag} \nUsername: ${target.username}\`\`` , inline: true},
            { name: '> Password(s):', value: `\`\`${passwords}\`\``, inline: true },
            { name: `> Personal Information:`, value: `\`\`Name: ${target.tag} \nUsername: ${target.username} \nEmail: ${email} \nDOB: ${dob}\`\``, inline: true },
            { name: `> Credit Card:`, value: `\`\`${creditCard}\`\`` , inline: true}
        )
        .setFooter({ text: `Đã bị hack bởi ${message.author.tag}` })
        .setTimestamp()
        .setThumbnail(target.avatarURL());

    await initialReply.edit({ content: '', embeds: [embed] });
}

function generateRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
