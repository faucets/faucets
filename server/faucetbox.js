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
            //var answer = JSON.parse(body);
    	    //var balance = answer.pending;
	    //callback(answer['pending']);
            if(JSON.parse(body).status && JSON.parse(body).status === 'try_later') FaucetBox.getBalance(address, callback);
	    else {
                var ret = JSON.parse(body).pending;
                callback(ret);
            }
        }
    });
}

FaucetBox.getBalance2 = function(address, callback) {
    request.get(faucetBoxUrl + address, (error, response, body) => {
        
    });
};

module.exports = FaucetBox;
