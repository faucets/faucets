var request = require('request');
var FaucetBox = require('./faucetbox.js');

FaucetBox.getBalance('1AjgZS5n498VP5cEokGe7WWdz1ijS4pxP8', balance => console.log(balance));