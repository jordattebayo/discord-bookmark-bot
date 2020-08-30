require("dotenv").config();

const { Client } = require("discord.js");

const client = new Client();
const PREFIX = "--";

client.on("ready", () => {
  console.log(`${client.user.username} has logged in`);
});

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    message
      .react("👍")
      .then(() => console.log(`Sent a reply to ${message.author.username}`))
      .catch(console.error);
  }
});
