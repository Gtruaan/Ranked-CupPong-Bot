const { SlashCommandBuilder } = require("discord.js");
const { buildRankEmbed } = require("../utility/rank-embed.js");


module.exports = {
    data: new SlashCommandBuilder()
              .setName("rank")
              .setDescription("Check your current rank and ELO"),
    async execute(interaction) {
        await interaction.reply({ embeds: [buildRankEmbed(interaction)] });
    },
};
