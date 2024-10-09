const AutocompleteComponent = require("../../structure/AutocompleteComponent");
const haydayitems = require("../../data/items");

module.exports = new AutocompleteComponent({
    commandName: 'haydayinfo',
    run: async (client, interaction) => {
        const currentInput = interaction.options.getFocused();
        const filteredItems = haydayitems.filter(item => item.name.toLowerCase().startsWith(currentInput.toLowerCase()));

        await interaction.respond(filteredItems.map(item => ({
            name: item.name,
            value: item.name
        })));
    }
}).toJSON();