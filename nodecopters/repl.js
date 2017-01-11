const repl = require('repl');
const msg = "YO";

repl.start('> ').context.m = msg;