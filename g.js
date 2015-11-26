var faucets = [
    'http://milli.io/?r=', //65%
    'http://www.siizo.com/?r=', //40%
    'https://f3-btc.com/?r=', //30%
    'http://itsrainingbitcoins.com/?r=', //20%
    'http://satoshifiesta.com/?r=', //15%
    'http://bibifaucet.com/?r=', //10%
    'http://razercrypt.com/btc/?r=', //?
    'http://btc4you.net/?r=', //10%
    'http://bluesatoshi.com/?r=', // 10%
    'http://dorifaucet.com/btc/?r=', //10%
    'http://www.free-faucet.eu/?r=', //10%
    'http://bitcoindrips.com/?r=', //10%
];

var refAddress = '1AjgZS5n498VP5cEokGe7WWdz1ijS4pxP8';

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
