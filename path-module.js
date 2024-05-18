/**
 * PATH module:
 */

const path = require('path');
// log(path.sep);

// Returns the normalized path, i.e. ignores the additional slashes.
const filePath = path.join('./content/','subfolder','test.txt');
log(filePath);

// Shows the file name.
const base = path.basename(filePath);
log(base);

// Create an absolute path of the file.
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt');
log(absolute);