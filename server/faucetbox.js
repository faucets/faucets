var request = require('request');
var config = require('./config.js');

var FaucetBox = {};

var faucetBoxUrl = 'https://faucetbox.com/en/ajax/address_checker/';

FaucetBox.getBalance = function(address, callback) {
    request({uri: faucetBoxUrl + address,
             proxy: config.proxy}, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        if (!error && response.statusCode == 200) {
            var answer = JSON.parse(body);
    		var balance = answer.pending;
			callback(answer);
		}
	});
}

module.exports = FaucetBox;
