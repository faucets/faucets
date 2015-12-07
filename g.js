// TODO
// - Add refresh button (usefull for adblock)

var faucets = [
    {name: 'milli.io', url: 'http://milli.io/?r=', period: '60'},
    {name: 'f3-btc.com', url: 'https://f3-btc.com/?r=', period: '60'},
    {name: 'satoshi.ws', url: 'http://satoshi.ws/?r=', period: '400'},
];

var address = '1AjgZS5n498VP5cEokGe7WWdz1ijS4pxP8';
var refAddress = '1A5NFjjFrHc7JFKTxHN7NeHm7tHPdQjtax';

var index = 0;

function displayFaucet() {
    var faucet = faucets[index].url + refAddress;
    document.getElementById("myframe").src=faucet;
}

function next() {
    _setUsed()
    index+=1;
    if (index >= faucets.length) index=0;
    displayFaucet();
}

function prev() {
    index-=1;
    if (index < 0) index = faucets.length - 1 ;
    displayFaucet();
}

function _setUsed() {
    document.cookie = faucets[index].name + '=' + Date.now();
}
