module.exports = {
    buildRankEmbed(interaction) {
        let embed = {
            "type": "rich",
            "title": `${interaction.user.username}'s Rank`,
            "description": "",
            "color": 0xD37863,
            "fields": [
                {
                "name": `Current Rank:`,
                "value": `**TeddyBero V**`,
                "inline": true
                },
                {
                "name": `ELO Rating:`,
                "value": `120`,
                "inline": true
                },
                {
                "name": `Wins:`,
                "value": `3`,
                "inline": true
                }
            ],
            "thumbnail": {
                "url": `https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Season_2019_-_Bronze_1.png/revision/latest/scale-to-width-down/250?cb=20181229234910`,
                "height": 0,
                "width": 0
            },
            "footer": {
                "text": `Remember to use /register to update matches.`
            }
        };

        return embed;
    }
}
