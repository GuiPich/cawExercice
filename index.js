const userInfo = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello my name is ${userInfo.name} and I'm from ${userInfo.campus} !`,
    e: "oO",
    T: "U "
}));