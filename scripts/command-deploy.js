const { REST, Routes } = require('discord.js');
require("dotenv").config();
const fs = require('node:fs');
const path = require('node:path');

const commands = [];

const cmmdsPath = path.join(__dirname, "commands");
const cmmdsFiles = fs.readdirSync(cmmdsPath).filter((f) => f.endsWith(".js"));

for (const file of cmmdsFiles) {
    const fp = path.join(cmmdsPath, file);
    const command = require(fp);

    // name: { data, execute }
    // Remember to check if data and execute are defined
    commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env["BOT_TOKEN"]);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
            Routes.applicationCommands(process.env["CLIENT_ID"]),
            { body: commands },
        );

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();