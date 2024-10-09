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
        botDevelopers: true
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
            const details = `### Used For: \n${item.details[0].usedFor}\n### Machine:\n${item.details[0].machine}\n### Ingredients:\n - ${item.details[0].ingredients} \n### Time Needed:\n${item.details[0].timeNeeded} hours\n\n### Boat info: \n==============================\n- level-30s\n -> ${item.details[0].boat1}\n- level-50s -> ${item.details[0].boat2}\n- level-90s -> ${item.details[0].boat3}\n==============================`;
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