// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Have more clarity on js destructuring.
const  {john, peter} = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-export-flavor");

// When a module is required, the function is invoked.
require("./mind-grenade")

// sayHi('Pramithas');
// sayHi(john);
// sayHi(peter);
// console.log(data);