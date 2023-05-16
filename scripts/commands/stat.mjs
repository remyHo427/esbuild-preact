import esb from "esbuild";
import build from "./build.mjs";
import fs from "node:fs";

export default async function stat({ simples, longs, pairs, cfg }) {
    const useJson = longs.json || cfg.json || false;
    const meta = (await build({ simples, longs, pairs, cfg })).metafile


    if (useJson) {
        fs.writeFileSync("./meta.json", JSON.stringify(meta));
    } else {
        console.log(await esb.analyzeMetafile(meta));
    }
}