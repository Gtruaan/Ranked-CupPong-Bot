# PongRank 🥤
## A bot that keeps track of your Cup Pong triumphs (and horrifying defeats)

Ever wanted to tryhard on one of the most casual games in the world? **PongRank** is here to help you out!

Add this bot to a Discord server with your friends, and instantly start tracking your progress in the game of Cup Pong.

## Progress ⚒

This project is in it's starting stage. It's barely working as a Discord bot. I'll be updating it frequently, so stay tuned!

## Installation 📥

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `touch .env` to create a `.env` file and add the following information:
```env
BOT_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
```
4. Run `node app.js` to start the bot. Upon success, you'll see the following message:
```plaintext
Setting up listeners for {client name}
```

## Planned features 👀

- `/rank` command to check your current rank in the server.
- `/register` command to register matches in the database. Will need confirmation of both players to work.
- *ELO* system, similar to the one used in chess or League of Legends.
- A database that stores match history and player data, both globally and per server.

## Contributing 🤝

I'm not taking contributions at the moment since this is a project to get started with Discord.js. Feel free to fork or leave suggestions in the issues tab.

## Change log

### 0.0.1
Initialized project and repository. Added basic bot functionality as per the official Discord.js guide.