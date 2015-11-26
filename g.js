var faucets = [
    'http://milli.io/?r=',
    'http://bibifaucet.com/?r='
];

var refAddress = '1AjgZS5n498VP5cEokGe7WWdz1ijS4pxP8';

var index = 0;

function displayFaucet(index) {
    var faucet = faucets[index] + refAddress;
    console.log('iframe url: ' + faucet);
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
