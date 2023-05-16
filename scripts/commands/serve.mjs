import esb from "esbuild";

export default async function serve({ simples, longs, pairs, cfg }) {
    const host = pairs.host || cfg.host || "127.0.0.1";
    const portStr = pairs.port || cfg.port;
    const port = Number.parseInt(portStr) || 8000;
    const target = pairs.target || cfg.target || "esnext";

    const ctx = await esb.context({
        entryPoints: [ "./src/index.jsx" ],
        outdir: "./www/static/",
        bundle: true,
        plugins: [ ],
        jsxFactory: "h",
        jsxFragment: "fragment",
        target
    });

    await ctx.watch();
    await ctx.serve({
        servedir: "./www",
        host,
        port,
    });
    
    console.log(`development server started at: http://${host}:${port}`);
}