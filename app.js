require("dotenv").config();
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const path = require("node:path");
const fs = require("node:fs");


const client = new Client({ intents: GatewayIntentBits.Guilds });

client.once(Events.ClientReady, (c) => {
    console.log(`Setting up listeners for ${c.user.tag}`);
});

/*
* Register commands
*/
client.commands = new Collection();

const cmmdsPath = path.join(__dirname, "commands");
const cmmdsFiles = fs.readdirSync(cmmdsPath).filter((f) => f.endsWith(".js"));

for (const file of cmmdsFiles) {
    const fp = path.join(cmmdsPath, file);
    const command = require(fp);

    // name: { data, execute }
    client.commands.set(command.data.name, command);
}

/*
* Handle commands
*/
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.log("No command");
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.log(error);
            await interaction.reply({ content: "Something went wrong", ephemeral: true });
        }
    }
});


client.login(process.env["BOT_TOKEN"]);
