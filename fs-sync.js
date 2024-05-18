const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs');

// Sync
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
log(first, second);
// {flag: 'a'} appends the content of the file.
writeFileSync("./content/third.txt",`Here is the combination of first and second: ${first} ${second}`, {flag:'a'});
