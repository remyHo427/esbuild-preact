import process from "node:process";
import parseArguments from "./args.mjs";
import readConfig from "./cfg.mjs";
import * as commands from "./commands/index.mjs";

const { verb, simples, longs, pairs } = parseArguments(process.argv, 2);
const argsObj = { simples, longs, pairs };
const cfg = await readConfig(argsObj);
const command = commands[verb];

if (command) {
    command({ ...argsObj, cfg });
} else {
    if (verb.length === 0 || !verb)
        console.log("no verb is given");
    else
        console.log(`unknown verb "${verb}"`);
    process.exit(1);
}