import { ICommand } from "../interfaces/ICommand";

const command: ICommand = {
  name: "greet",
  description: "",
  usage: "",
  aliases: [],
  guildOnly: true,
  args: false,
  cooldown: 3,

  execute(message, args) {
    const authorTag = message.author.username;
    console.log(`Greeting called!`);
    message.channel.send(`Hello ${authorTag}`);
  }
};

module.exports = { command };
