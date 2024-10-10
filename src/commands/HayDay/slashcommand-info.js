const { ChatInputCommandInteraction, ApplicationCommandOptionType } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const ApplicationCommand = require("../../structure/ApplicationCommand");
const haydayitems = require("../../data/items");
const { EmbedBuilder } = require('discord.js');

module.exports = new ApplicationCommand({
    command: {
        name: 'haydayinfo',
        description: 'Get information about Hay Day.',
        type: 1,
        options: [{
            name: 'option',
            description: 'Select one of the options!',
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true
        }]
    },
    options: {
        botDevelopers: false
    },
    /**
     *
     * @param {DiscordBot} client
     * @param {ChatInputCommandInteraction} interaction
     */
    run: async (client, interaction) => {
        const chosen = interaction.options.getString('option', true);
        const item = haydayitems.find(item => item.name === chosen);

        if (item) {
            const details = `### Max price for 10:\n${item.details[0].maxprice}\n### Level required:\n${item.details[0].level}\n### Used For:\n${item.details[0].usedFor}\n### Machine:\n${item.details[0].machine}\n### Ingredients:\n${item.details[0].ingredients}\n### Time Needed:\n${item.details[0].timeNeeded}\n\n### Boat info: \n==============================\n- level-to 55 -> ${item.details[0].boat1}\n- level-55-95 -> ${item.details[0].boat2}\n- level- 95 + -> ${item.details[0].boat3}\n==============================`;
            const haydayembed = new EmbedBuilder()
                .setColor('ff4700')
                .setTitle(item.name)
                .setDescription(details);

            await interaction.reply({ embeds: [haydayembed] });
        } else {
            await interaction.reply({ content: 'Item not found!', ephemeral: true });
        }
    }
}).toJSON();