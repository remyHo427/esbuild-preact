export default function help({ simples, longs, pairs, cfg }) {
    if (!simples.length
        && !Object.keys(longs).length
        && !Object.keys(pairs).length
    ) {
        console.log(
            `
usage: <verb> [ args ]
    where verb:
        build, serve, help, stat
    where args:
        --flag=value | --booleanFlag
    
examples:
    help --command=stat
    help --command=help
    help
    serve --port=8000 --host=127.0.0.1
    build --minify --sourcemap
    stat`);
    } else {
        switch (pairs.command) {
            case "serve":
                console.log(
`serve: 
    Starts a development server.
available options:
    --port=<integer>
        specify the port to use, default is 8000
    --host=<ip_string>
        specify the host IP, default is 127.0.0.1`);
                break;
            case "stat":
                console.log(
`
stat:
    Print statistics about the bundle size.
available options:
    --json
        output esbuild metafile as meta.json in the root directory.
`);
                break;
            case "build":
                console.log(
`build:
    Bundle up source code for production use.
available options:
    --minify:
        enable minification on the bundled code
    --sourcemap:
        generate sourcemap with the bundled code`);
                break;
            case "help":
                console.log(
`help:
    Print information on how to use this script. 
    When provided with no options, print the default help message.
available options:
    --command=<help | build | stat | serve>
        print information about a specific command`);
                break;
            default:
                if (pairs.command === null) {
                    console.log("please give a command like this: help --command=stat");
                } else {
                    console.log(`unknown command "${pairs.command}"`);
                }
        }
    }
}