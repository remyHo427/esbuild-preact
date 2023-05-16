import { readFile } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

export default async function readConfig({ simple, longs, pairs }) {
    const rootDir = dirname(fileURLToPath(import.meta.url));
    const path = pairs.path || resolve(rootDir, "../config.json");
    const str = await promisify(readFile)(path, { encoding: "utf-8", flag: "r" });
    
    return JSON.parse(str);
}