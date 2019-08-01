import * as discord from "discord.js";
export interface ICommand {
  name: string;
  description: string;
  usage: string;
  args: boolean;
  guildOnly: boolean;
  cooldown: number;
  execute(message: discord.Message, args: Array<string>): any;
}
