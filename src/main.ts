const log = console.log;
const { prefix, token }: IConfig = require("./util/config.json");
import { IConfig } from "./interfaces/IConfig";
import * as discord from "discord.js";
import chalk from "chalk";
import { greet } from "./commands/greet";

const client = new discord.Client();

client.on("ready", () => {
  log(chalk`{bgCyan.bold ${client.user.username} online}`);
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let args: Array<string> = message.content.slice(prefix.length).split(/ +/);
  let cmd_name = args.shift();

  const cmd = greet.execute(message, args);
});

client.login(token);
