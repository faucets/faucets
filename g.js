// TODO
// - Add refresh button (usefull for adblock)

var faucets = [
    {name: 'milli.io', url: 'http://milli.io/?r=', period: '60'},
    {name: 'f3-btc.com', url: 'https://f3-btc.com/?r=', period: '60'},
    {name: 'satoshi.ws', url: 'http://satoshi.ws/?r=', period: '400'},
	{name:'razercrypt.com', url:'http://razercrypt.com/btc/?r=', period: ''},
	{name:'bluesatoshi.com', url:'http://bluesatoshi.com/?r=', period: ''},
	{name:'dorifaucet.com', url:'http://dorifaucet.com/btc/?r=', period: ''},
	{name:'satoshididu.com', url:'http://www.satoshididu.com/?r=', period: ''},
	{name:'BitcoinDrips.com', url:'http://BitcoinDrips.com/?r=', period: ''},
	{name:'itsrainingbitcoins.com', url:'http://itsrainingbitcoins.com/?r=', period: ''},
	{name:'rainingfreebitcoins.com', url:'http://rainingfreebitcoins.com/?r=', period: ''},
	{name:'bitcoin.cryptorials.io', url:'http://bitcoin.cryptorials.io/?r=', period: ''},
	{name:'luckybitfaucet.com', url:'http://www.luckybitfaucet.com/?r=', period: ''},
	{name:'linda.globeslot.com', url:'http://linda.globeslot.com/?r=', period: ''},
	{name:'freebitcoins4u.co.uk', url:'http://www.freebitcoins4u.co.uk/?r=', period: ''},
	{name:'satoshifiesta.com', url:'http://satoshifiesta.com/?r=', period: ''},
	{name:'prizebitcoins.com', url:'http://www.prizebitcoins.com/?r=', period: ''},
	{name:'puzzlebitco.in', url:'http://puzzlebitco.in/?r=', period: ''},
	{name:'faucetbitcoins.com', url:'http://www.faucetbitcoins.com/?r=', period: ''},
	{name:'bitcobear.com', url:'http://bitcobear.com/?r=', period: ''},
	{name:'freebitcoinhome.com', url:'http://www.freebitcoinhome.com/?r=', period: ''},
	{name:'hentenaar.com', url:'http://hentenaar.com/faucet/?r=', period: ''},
	{name:'rekbitcoin.com', url:'http://rekbitcoin.com/?r=', period: ''},
	{name:'top-bit.com', url:'http://www.top-bit.com/faucet/?r=', period: ''},
	{name:'wytewolfbtc.com', url:'http://www.wytewolfbtc.com/?r=', period: ''},
	{name:'bitcoinerz.eu', url:'http://www.bitcoinerz.eu/?r=', period: ''},
	{name:'oneadfaucet.com', url:'http://oneadfaucet.com/btc/?r=', period: ''},
	{name:'btcon.net', url:'http://www.btcon.net/?r=', period: ''},
	{name:'btc-snack.com', url:'http://btc-snack.com/?r=', period: ''},
	{name:'freebitcoinz.tk', url:'http://freebitcoinz.tk/?r=', period: ''},
	{name:'minions-faucet.com', url:'http://minions-faucet.com/?r=', period: ''},
	{name:'thefreebitcoin.website', url:'http://thefreebitcoin.website/?r=', period: ''},
	{name:'breaktheco.in', url:'http://breaktheco.in/?r=', period: ''},
	{name:'bitmax.esy.es', url:'http://bitmax.esy.es/?r=', period: ''},
	{name:'this.faucet.rocks', url:'http://this.faucet.rocks/?r=', period: ''},
	{name:'rapidbitco.in', url:'http://www.rapidbitco.in/?r=', period: ''},
	{name:'pampafaucet.com', url:'http://pampafaucet.com/?r=', period: ''},
	{name:'free-faucet.eu', url:'http://www.free-faucet.eu/?r=', period: ''},
	{name:'satoshigenerator.com', url:'http://satoshigenerator.com/?r=', period: ''},
	{name:'get-free-bitco.in', url:'http://www.get-free-bitco.in/?r=', period: ''},
	{name:'faucet-coins.com', url:'http://faucet-coins.com/?r=', period: ''},
	{name:'minibtcfaucet.com', url:'http://www.minibtcfaucet.com/?r=', period: ''},
	{name:'faucetbit.co.in', url:'http://www.faucetbit.co.in/?r=', period: ''},
	{name:'safebitco.in', url:'http://www.safebitco.in/?r=', period: ''},
	{name:'f3-btc.com', url:'http://f3-btc.com/?r=', period: ''},
	{name:'wot-farm.ru', url:'http://wot-farm.ru/?r=', period: ''},
	{name:'theearner.co.in', url:'http://theearner.co.in/?r=', period: ''},
	{name:'SumoSatoshi.com', url:'http://www.SumoSatoshi.com/?r=', period: ''},
	{name:'freebtcoins.com', url:'http://www.freebtcoins.com/?r=', period: ''},
	{name:'doublemybtc.com', url:'http://www.doublemybtc.com/game/?r=', period: ''},
	{name:'freebtc.co.in', url:'http://www.freebtc.co.in/?r=', period: ''},
	{name:'bitcoin-faucet.website', url:'http://www.bitcoin-faucet.website/?r=', period: ''},
	{name:'faucetbtc.ru', url:'http://faucetbtc.ru/?r=', period: ''},
	{name:'captchas.rocks', url:'http://captchas.rocks/?r=', period: ''},
	{name:'elenabitco.in', url:'http://elenabitco.in/?r=', period: ''},
	{name:'faucetbox.cryptal.net', url:'http://faucetbox.cryptal.net/?r=', period: ''},
	{name:'freebetco.in', url:'http://freebetco.in/?r=', period: ''},
	{name:'allyoursatoshis.com', url:'http://allyoursatoshis.com/?r=', period: ''},
	{name:'winco.in', url:'http://winco.in/faucetbox/?r=', period: ''},
	{name:'intemi.com', url:'http://www.intemi.com/?r=', period: ''},
	{name:'busbitco.in', url:'http://busbitco.in/?r=', period: ''},
	{name:'freedombit.co.in', url:'http://freedombit.co.in/?r=', period: ''},
	{name:'freebtcfaucet.com', url:'http://freebtcfaucet.com/?r=', period: ''},
	{name:'freshcoins.ru', url:'http://freshcoins.ru/?r=', period: ''},
	{name:'fasterbit.ru', url:'http://fasterbit.ru/?r=', period: ''},
	{name:'mybestbitcoin.com', url:'http://mybestbitcoin.com/?r=', period: ''},
	{name:'hourlybitcoin.com', url:'http://www.hourlybitcoin.com/?r=', period: ''},
	{name:'faucetsgalaxy.com', url:'http://faucetsgalaxy.com/?r=', period: ''},
	{name:'bctec.ru', url:'http://bctec.ru/faucet/?r=', period: ''},
	{name:'claimbit.co.uk', url:'http://www.claimbit.co.uk/?r=', period: ''},
	{name:'faucet-bitco.in', url:'http://faucet-bitco.in/?r=', period: ''},
	{name:'your-bit.co.in', url:'http://your-bit.co.in/?r=', period: ''},
	{name:'freesatoshi.com.ua', url:'http://freesatoshi.com.ua/?r=', period: ''},
	{name:'earnbitcoinonline.com', url:'http://earnbitcoinonline.com/1/?r=', period: ''},
	{name:'zoobit.co.in', url:'http://zoobit.co.in/?r=', period: ''},
	{name:'boxfaucet.com', url:'http://boxfaucet.com/?r=', period: ''},
	{name:'jazfaucetlist.com', url:'http://www.jazfaucetlist.com/?r=', period: ''},
	{name:'getbitco.com', url:'http://getbitco.com/?r=', period: ''},
	{name:'', url:'http://goo.gl/2Lxl69/?r=', period: ''},
	{name:'artbitco.in', url:'http://artbitco.in/?r=', period: ''},
	{name:'bubble-bit.co.in', url:'http://bubble-bit.co.in/?r=', period: ''},
	{name:'jobbitcoin.com', url:'http://www.jobbitcoin.com/?r=', period: ''},
	{name:'yourpersonalfaucet.com', url:'http://www.yourpersonalfaucet.com/?r=', period: ''},
	{name:'cryptogolds.com', url:'http://cryptogolds.com/Bitcoin/?r=', period: ''},
	{name:'favoritefaucets.com', url:'http://www.favoritefaucets.com/btc-faucet/?r=', period: ''},
	{name:'free-satoshi.eu', url:'http://free-satoshi.eu/?r=', period: ''},
	{name:'freeebtc.com', url:'http://www.freeebtc.com/?r=', period: ''},
	{name:'crypto4free.net', url:'http://crypto4free.net/?r=', period: ''},
	{name:'earnbitcoinonline.com', url:'http://earnbitcoinonline.com/?r=', period: ''},
	{name:'freebit.website', url:'http://freebit.website/?r=', period: ''},
	{name:'getmyfaucetbtc.com', url:'http://getmyfaucetbtc.com/?r=', period: ''},
	{name:'btcfavorite.com', url:'http://btcfavorite.com/?r=', period: ''},
	{name:'sanmarino-bitcoin.com', url:'http://sanmarino-bitcoin.com/?r=', period: ''},
	{name:'bitkran4ik.ru', url:'http://bitkran4ik.ru/?r=', period: ''},
	{name:'faucet-bitco.in.ua', url:'http://faucet-bitco.in.ua/?r=', period: ''},
	{name:'getyourfreebitcoins.com', url:'http://getyourfreebitcoins.com/?r=', period: ''},
	{name:'workrunet.info', url:'http://workrunet.info/?r=', period: ''},
	{name:'btcmsk.com', url:'http://btcmsk.com/faucet/?r=', period: ''},
	{name:'insatoshi.com', url:'http://www.insatoshi.com/?r=', period: ''},
	{name:'faucetfm.com', url:'http://faucetfm.com/?r=', period: ''},
	{name:'web-socnet.ru', url:'http://web-socnet.ru/?r=', period: ''},
	{name:'luckyfaucet.org', url:'http://luckyfaucet.org/?r=', period: ''},
	{name:'freebitcoins1.com', url:'http://freebitcoins1.com/?r=', period: ''},
	{name:'faucet.workrunet.net', url:'http://faucet.workrunet.net/?r=', period: ''},
	{name:'aquabitcoin.com', url:'http://aquabitcoin.com/?r=', period: ''},
	{name:'oceanbitcoin.com', url:'http://www.oceanbitcoin.com/?r=', period: ''},
	{name:'kingofsatoshi.com', url:'http://www.kingofsatoshi.com/?r=', period: ''},
	{name:'jrswab.com', url:'http://jrswab.com/justgetbit/?r=', period: ''},
	{name:'bitcoinshowers.com', url:'http://bitcoinshowers.com/?r=', period: ''},
	{name:'earnbitcoinonline.com', url:'http://earnbitcoinonline.com/2/?r=', period: ''},
	{name:'argentumfaucet.com', url:'http://argentumfaucet.com/?r=', period: ''},
	{name:'freembtc.com', url:'http://www.freembtc.com/?r=', period: ''},
	{name:'faucet.zarabotat-bitcoin.com', url:'http://www.faucet.zarabotat-bitcoin.com/?r=', period: ''},
	{name:'faucetbitcoin.ru', url:'http://faucetbitcoin.ru/?r=', period: ''},
	{name:'freeco.in.ua', url:'http://freeco.in.ua/?r=', period: ''},
	{name:'btcforme.com', url:'http://btcforme.com/?r=', period: ''},
	{name:'faucetbit.ru', url:'http://faucetbit.ru/?r=', period: ''},
	{name:'goldwmr.ru', url:'http://goldwmr.ru/?r=', period: ''},
	{name:'satoshidrip.com', url:'http://www.satoshidrip.com/?r=', period: ''},
	{name:'greenbitco.in', url:'http://greenbitco.in/?r=', period: ''},
	{name:'flashbtc.com', url:'http://flashbtc.com/?r=', period: ''},
	{name:'luckbitcoin.com', url:'http://www.luckbitcoin.com/?r=', period: ''},
	{name:'caimanbitcoin.com', url:'http://www.caimanbitcoin.com/?r=', period: ''},
	{name:'luckyfaucet.ru', url:'http://luckyfaucet.ru/?r=', period: ''},
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
