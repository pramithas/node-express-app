const {readFile, writeFile} = require('fs');

// Handling using callback.
readFile('./content/first.txt','utf-8', (err, result) => {
    if(err){
        console.log(`Error encountered: ${err}`);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err, result) => {
        if(err){
            console.log(`Error encountered: ${err}`);
            return
        }
        const second = result;
        writeFile("./content/third.txt",`Combination using async: ${first} ${second}`, (err, result) => {
            if(err){
                console.log(`Error encountered: ${err}`);
                return
            }
        });
    });
});