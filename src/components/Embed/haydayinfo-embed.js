// at the top of your file
const { EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail('https://i.ibb.co/Jz10yv4/tommy.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.ibb.co/XXBX2fm/DFHAYDAYRECRUIT.png')
    .setTimestamp()
    .setFooter({ text: 'Tommy', iconURL: 'https://i.ibb.co/Jz10yv4/tommy.png' });

channel.send({ embeds: [exampleEmbed] });