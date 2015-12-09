// TODO
// - Add refresh button (usefull for adblock)

var faucets = [
    {name:'oneadfaucet.com', url:'http://oneadfaucet.com/btc/?r=', period: 800, referral: 0.1, reward: 1111},
    {name:'breaktheco.in', url:'http://breaktheco.in/?r=', period: 400, referral: 0.5, reward: 2100},
    {name:'get-free-bitco.in', url:'http://www.get-free-bitco.in/?r=', period: 440, referral: 0.5,reward: 2400},
    {name:'theearner.co.in', url:'http://theearner.co.in/?r=',  period: 420, referral: 0.5,reward: 2150},
    {name:'razercrypt.com', url:'http://razercrypt.com/btc/?r=', period: '800', referral: 0.1, reward: 1000},
    {name:'bluesatoshi.com', url:'http://bluesatoshi.com/?r=', period: '800', referral: 0.1, reward: 1100},
    {name:'dorifaucet.com', url:'http://dorifaucet.com/btc/?r=', period: '800', referral: 0.1, reward: 1000},
    {name:'satoshididu.com', url:'http://www.satoshididu.com/?r=', period: '400', referral: 0.1, reward: 500},
    {name:'BitcoinDrips.com', url:'http://BitcoinDrips.com/?r=', period: '60', referral: 0.1, reward: 250},
    {name:'itsrainingbitcoins.com', url:'http://itsrainingbitcoins.com/?r=', period: '900', referral: 0.2, reward: 500},
    {name:'bitcoin.cryptorials.io', url:'http://bitcoin.cryptorials.io/?r=', period: '60', referral: 0.15, reward: 320},
    {name:'luckybitfaucet.com', url:'http://www.luckybitfaucet.com/?r=', period: '60', referral: 0, reward: 200},
    {name:'linda.globeslot.com', url:'http://linda.globeslot.com/?r=', period: 800, referral: 0.1, reward: 400},
    {name:'prizebitcoins.com', url:'http://www.prizebitcoins.com/?r=', period: 400, referral: 20, reward: 250},
    {name:'puzzlebitco.in', url:'http://puzzlebitco.in/?r=', period: 800, referral: 0.15, reward: 705},
    {name:'bitcobear.com', url:'http://bitcobear.com/?r=', period: 600, referral: 0.1, reward: 505},
    {name:'rekbitcoin.com', url:'http://rekbitcoin.com/?r=', period: 800, referral: 0.10, reward: 705},
    {name: 'milli.io', url: 'http://milli.io/?r=', period: '60', referral: 0.65, reward: 338},
    {name: 'f3-btc.com', url: 'https://f3-btc.com/?r=', period: '60', referral: 0.3, reward: 530},
    {name: 'satoshi.ws', url: 'http://satoshi.ws/?r=', period: '400', referral: 0.15, reward: 550},
];

var address = '1AjgZS5n498VP5cEokGe7WWdz1ijS4pxP8';
var refAddress = '1A5NFjjFrHc7JFKTxHN7NeHm7tHPdQjtax';

var index = -1;

function displayFaucet() {
    var faucet = faucets[index].url + refAddress;
    document.getElementById("myframe").src=faucet;
}

function next() {
    if ( index !== -1 ) _setUsed()
    index+=1;
    if (index >= faucets.length) index=0;
    displayFaucet();
}

function prev() {
    if ( index !== -1 ) {
    	index-=1;
    	if (index < 0) index = faucets.length - 1 ;
    	displayFaucet();
    }
}

function _setUsed() {
    document.cookie = faucets[index].name + '=' + Date.now();
}
