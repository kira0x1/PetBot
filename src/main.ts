const log = console.log;
const { prefix, token }: IConfig = require("./util/config.json");
import { IConfig } from "./interfaces/IConfig";
import * as discord from "discord.js";
import chalk from "chalk";
import { ICommand } from "./interfaces/ICommand";
import { readdirSync } from "fs";

const client = new discord.Client();

let commands: Array<ICommand> = [];

readdirSync("./dist/commands/").forEach(cmd => {
  const { command } = require(`./commands/${cmd}`);
  commands.push(command);
});

client.on("ready", () => {
  log(chalk`{bgCyan.bold ${client.user.username} online}`);
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let args: Array<string> = message.content.slice(prefix.length).split(/ +/);
  let cmd_name: string = args.shift() || "none";
  if (cmd_name === "none" || cmd_name === prefix) return;

  const cmd = commands.find(
    c => c.name === cmd_name || (c.aliases && c.aliases.includes(cmd_name))
  );

  if (!cmd) return message.channel.send(`Command **${cmd_name}** not found`);

  log(`Calling command: ${cmd_name}`);
  await cmd.execute(message, args);
});

client.login(token);
