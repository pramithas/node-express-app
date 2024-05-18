/**
 * 1. OS module
 */

const { log } = require('console');
const os = require('os');

// info about current user
const user = os.userInfo();
//log(user);

// method returns the system uptime in seconds
//log(`The system uptime is: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeeMem: os.freemem()
};

//log(currentOS);