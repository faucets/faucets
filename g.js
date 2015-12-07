// TODO
// - Add refresh button (usefull for adblock)

var faucets = [
    'http://milli.io/?r=', //65%
    'https://f3-btc.com/?r=', //30% - 60minutes // referral ok
    'http://itsrainingbitcoins.com/?r=', //20% - 500S - 900 minutes // referral broken ?
    'http://razercrypt.com/btc/?r=', //? // referral broken ?
    'http://bluesatoshi.com/?r=', // 10% // referral broken ?
    'http://dorifaucet.com/btc/?r=', //10% // referral broken ?
    'http://www.free-faucet.eu/?r=', //10% // referral broken ?
    'http://bitcoindrips.com/?r=', //10%// referral broken ?
    'http://satoshi.ws/?r=', // referral ok
    'http://www.satoshididu.com/?r=',  // referral broken ?
];

var faucets2 = [
    {name: 'milli.io', url: 'http://milli.io/?r=', period: '60'},
    {name: 'f3-btc.com', url: 'https://f3-btc.com/?r=', period: '60'},
    {name: 'satoshi.ws', url: 'http://satoshi.ws/?r=', period: '400'},
];

var address = '1AjgZS5n498VP5cEokGe7WWdz1ijS4pxP8';
var refAddress = '1A5NFjjFrHc7JFKTxHN7NeHm7tHPdQjtax';

var index = 0;

function displayFaucet() {
    var faucet = faucets[index] + refAddress;
    document.getElementById("myframe").src=faucet;
}

function next() {
    index+=1;
    if (index >= faucets.length) index=0;
    displayFaucet();
}

function prev() {
    index-=1;
    if (index < 0) index = faucets.length - 1 ;
    displayFaucet();
}
