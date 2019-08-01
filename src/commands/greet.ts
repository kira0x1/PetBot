import { ICommand } from "../interfaces/ICommand";

const greet: ICommand = {
  name: "greet",
  description: "",
  usage: "",
  guildOnly: true,
  args: false,
  cooldown: 3,

  execute(message, args) {
    const authorTag = message.author.username;
    console.log(`Greeting called!`);
    message.channel.send(`Hello ${authorTag}`);
  }
};

export { greet };
