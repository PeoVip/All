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

        const initialReply = await message.channel.send({ content: `Running the process to hack **${target.tag}**..` });

        await simulateHackingProcess(message, target, initialReply);
    }
};

async function simulateHackingProcess(message, target, initialReply) {
    await wait(2500);
    await initialReply.edit({ content: `Chạy tiến trình để hack **${target}**..` });
    await wait(2500);
    await initialReply.edit({ content: `Cài đặt ứng dụng trên **${target}** devices..` });
    await wait(2500);
    await initialReply.edit({ content: `Đang tìm **${target}** mật khẩu và ID của thiết bị..` });
    await wait(2500);
    await initialReply.edit({ content: `Đang dò **${target}** thẻ tín dụng..` });
    await wait(2500);
    await initialReply.edit({ content: `Hacking **${target}** máy tính và Wi-Fi..` });
    await wait(2500);
    await initialReply.edit({ content: `Đang lấy thông tin **${target}** vị trí, tên, mật khẩu, thông tin cá nhân..` });
    await wait(2500);
    await initialReply.edit({ content: `Đang đánh cắp thông tin **${target}'s** thông tin cá nhân, thẻ tín dụng và Wi-Fi..` });
    await wait(3000);
    await initialReply.edit({ content: `Nhiệm vụ hoàn thành! Tôi đã hack thành công **${target}** đã có mọi thông tin....🌍 ` });
    
    const devicePassword = generateRandomFromArray([
        `${target.tag}845!!`,
        `1234567890`,
        `sg457DS3Sd`,
        `${target.username}?!02`,
        `Password123`,
        `5239563`,
        `YellowDonkey24`
    ]);

    const id = generateRandomFromArray([
        "1234567890",
        "0987654321",
        "5432167890",
        "4673456783",
        "1295674377",
        "2364784236",
        "7985644738",
        "6543210987",
        "9876543210",
        "8765432109"
    ]);

    const wifiName = generateRandomFromArray([
        "SKY485hd3",
        "TFGS36H75",
        "SKY295GH9",
        "EE23HGD64",
        "TG67J5G43",
        "SKY11LLS4",
        "EEKF45H54",
        "SKY99FH34",
        "TFGS68H23",
        "SKY22GH77"
    ]);

    const wifiPassword = generateRandomFromArray([
        "Tgs35Jf4",
        "Jg5Hf4J5",
        "Hltg567h",
        "FFjj3j36",
        "Pp5Jg5J5",
        "34PoImmf",
        "Qgr34671",
        "Klo75Rt2",
        "Bg45Fy67",
        "Mn89Ds32"
    ]);

    const location = generateRandomFromArray([
        "9 Willow Way \nBrookfield ",
        "25 Chestnut Close \nHazelton",
        "6 Cherry Lane \nOrchardville ",
        "38 Maple Street \nGlenwood ",
        "12 Cedar Avenue \nPinehurst ",
        "17 Birchwood Drive \nOaktown ",
        "29 Elm Street \nAshville ",
        "4 Pine Ridge \nWoodville ",
        "8 Oakdale Terrace \nMaplewood ",
        "21 Willowbank \nRiverside ",
        "15 River View \nWillowbrook ",
        "7 Oak Avenue \nBirchville ",
        "42 Pine Street \nMapleton ",
        "30 Oakwood Avenue \nParkdale "
    ]);

    const passwords = generateRandomFromArray([
        `Ghd46zh1 \nHltg567h \nAdmin \nPassword123 \n${target.tag}845!!`,
        `Password \nJg5Hf4J5 \n12345 \nFFjj3j36 \nPp5Jg5J5`,
        `Admin \nHltg567h \nPassword123 \n34PoImmf \nQgr34671`,
        `YellowDonkey24 \nSKY11LLS4 \nEEKF45H54 \n2364784236 \n7985644738`,
        `CeleryStick23 \n34Jan2005 \nPass75 \nHltg567h \nAdmin0355`, 
        `01052005 \nJanuary2001 \n${target.tag}123 \nPassword123 \n21${target.tag}2005`,
        `^%$#^&* \nKlff4563d \nPassword55 \n${target.tag}2255 \nAdmin1234`
    ]);

    const email = generateRandomFromArray([
        `${target.tag}69@gmail.com`,
        `${target.tag}420@hotmail.com`,
        `${target.username}123@yahoo.com`,
        `${target.tag}69420@outlook.com`,
        `${target.tag}2001@icloud.com`,
        `${target.tag}69@discord.com`
    ]);

    const dob = generateRandomFromArray([
        "31/02/2005",
        "12/04/2001",
        "23/05/2000",
        "01/01/2001",
        "21/05/2005",
        "05/05/2005",
        "01/01/2005",
        "15/03/2002",
        "09/08/2003",
        "28/11/2004"
    ]);

    const creditCard = generateRandomFromArray([
        "Credit Card: 1234 5678 9101 1121 \nExpiry Date: 12/25 \nCVV: 123",
        "Credit Card: 4321 8765 1098 2111 \nExpiry Date: 11/26 \nCVV: 321",
        "Credit Card: 5678 1234 2111 1098 \nExpiry Date: 10/27 \nCVV: 456",
        "Credit Card: 8765 4321 1211 9876 \nExpiry Date: 09/28 \nCVV: 789",
        "Credit Card: 9876 5432 2111 8765 \nExpiry Date: 08/25 \nCVV: 654",
        "Credit Card: 6543 2109 1112 5432 \nExpiry Date: 07/27 \nCVV: 987",
        "Credit Card: 3210 9876 2111 2345 \nExpiry Date: 06/26 \nCVV: 321",
        "Credit Card: 1357 2468 9753 8642 \nExpiry Date: 05/23 \nCVV: 246",
        "Credit Card: 2468 1357 8642 9753 \nExpiry Date: 04/24 \nCVV: 135",
        "Credit Card: 9753 8642 2468 1357 \nExpiry Date: 03/25 \nCVV: 975"
    ]);

    const embed = new EmbedBuilder()
        .setAuthor({ iconURL: message.client.user.displayAvatarURL({ dynamic: true}), name: `${message.client.user.username} Hacking System` })
        .setColor('#0099ff')
        .setTitle(`**${target.tag}** You Are Done...`)
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
        .setFooter({ text: `Hacked by ${message.author.tag}` })
        .setTimestamp()
        .setThumbnail(target.avatarURL());

    await initialReply.edit({ content: '', embeds: [embed] });
}

function generateRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
