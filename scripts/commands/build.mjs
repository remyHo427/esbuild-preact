import esb from "esbuild";

export default async function build({ simples, longs, pairs, cfg }) {
    const minify = longs.minify || cfg.minify || false;
    const sourcemap = longs.sourcemap || cfg.sourcemap || false;

    return await esb.build({
        entryPoints: [ "./src/index.jsx" ],
        bundle: true,
        minify,
        sourcemap,
        outdir: "./dist",
        plugins: [ ],
        jsxFactory: "h",
        jsxFragment: "fragment",
        metafile: true
    });
}