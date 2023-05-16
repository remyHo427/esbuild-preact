export default function parseA(argv, startFrom = 0) {
    const args = argv.slice(startFrom);
    return {
        verb: args[0],
        simples: getSimpleFlags(args),
        longs: getLongFlags(args),
        pairs: getPairFlags(args)
    }
}

function getSimpleFlags(args) {
    return getargs(args, "-", /^[a-zA-Z]*$/, 1);
}
function getLongFlags(args) {
    return Object.fromEntries(getargs(args, "--", /^[a-zA-Z]*$/, 1)
            .map((a) => [a, true]));
}
function getPairFlags(args) {
    return Object.fromEntries(
            getargs(args, "--", /^[a-zA-Z]*=([a-zA-Z0-9\.])*$/, 1)
                .map((p) => p.split("=")));
}
function getargs(args, prefix, regex, startFrom = 0) {
    return args
            .slice(startFrom)
            .filter((a) => a.startsWith(prefix))
            .map((a) => a.slice(prefix.length))
            .filter((a) => regex.test(a));
}