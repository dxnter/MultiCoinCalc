/**
 * Fetches [USD,GBP,EUR,JPY,CNY] prices of the coinTicker paramater with the CryptoCompare API.
 * @param {String} coinTicker
 * @returns An object with key value pairs of currency abbreviations and exchanged price/coin.
 */
async function fetchCoinPrices(coinTicker) {
  const priceQuery = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${coinTicker}&tsyms=USD,GBP,EUR,JPY,CNY`
  );
  const pricesResponse = await priceQuery.json();
  return pricesResponse;
}

/**
 *  Response properties
 * "total_market_cap_usd"
    "total_24h_volume_usd"
    "bitcoin_percentage_of_market_cap"
    "active_currencies"
    "active_assets"
    "active_markets"
    "last_updated"
 *
 * @returns An object containing global cryptocurrency information
 */
async function fetchGlobalMarketData() {
  const globalQuery = await fetch(`https://api.coinmarketcap.com/v1/global/`);
  const marketData = await globalQuery.json();
  return marketData;
}

/**
 * Finds the product of the price per coin and input quantity then updates the DOM input element.
 */
async function calculatePrice() {
  const inputCoinName = document.getElementById('inputCoinName').value;
  const inputCurrency = document.getElementById('inputCurrency').value;
  const inputQuantity = document.getElementById('inputQuantity').value.replace(/,/g, '');
  const { USD, GBP, EUR, JPY, CNY } = await fetchCoinPrices(inputCoinName.toUpperCase());
  if (!inputQuantity || !inputCoinName || !inputCurrency) return;
  let currencySymbol = '';
  switch (inputCurrency) {
  case 'USD':
    currencySymbol = '$';
    break;
  case 'GBP':
    currencySymbol = '£';
    break;
  case 'EUR':
    currencySymbol = '€';
    break;
  case 'JPY':
  case 'CNY':
    currencySymbol = '¥';
    break;
  default:
    break;
  }
  const calculatedTotal = eval(inputCurrency) * inputQuantity;
  document.getElementById('fiatValue').value = `${currencySymbol}${Number(calculatedTotal).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  })}`;
}

const input = document.getElementById('inputCoinName');

new Awesomplete(input, {
  list: [
    { label: 'Bitcoin', value: 'BTC' },
    { label: 'Ethereum', value: 'ETH' },
    { label: 'Ripple', value: 'XRP' },
    { label: 'Bitcoin Cash', value: 'BCH' },
    { label: 'Litecoin', value: 'LTC' },
    { label: 'EOS', value: 'EOS' },
    { label: 'Cardano', value: 'ADA' },
    { label: 'Stellar', value: 'XLM' },
    { label: 'NEO', value: 'NEO' },
    { label: 'IOTA', value: 'MIOTA' },
    { label: 'Monero', value: 'XMR' },
    { label: 'Dash', value: 'DASH' },
    { label: 'TRON', value: 'TRX' },
    { label: 'Tether', value: 'USDT' },
    { label: 'NEM', value: 'XEM' },
    { label: 'Ethereum Classic', value: 'ETC' },
    { label: 'VeChain', value: 'VEN' },
    { label: 'Qtum', value: 'QTUM' },
    { label: 'Binance Coin', value: 'BNB' },
    { label: 'ICON', value: 'ICX' },
    { label: 'Lisk', value: 'LSK' },
    { label: 'OmiseGO', value: 'OMG' },
    { label: 'Bitcoin Gold', value: 'BTG' },
    { label: 'Nano', value: 'NANO' },
    { label: 'Zcash', value: 'ZEC' },
    { label: 'DigixDAO', value: 'DGD' },
    { label: 'Verge', value: 'XVG' },
    { label: 'Populous', value: 'PPT' },
    { label: 'Ontology', value: 'ONT' },
    { label: 'Siacoin', value: 'SC' },
    { label: 'Steem', value: 'STEEM' },
    { label: 'Stratis', value: 'STRAT' },
    { label: 'Bytecoin', value: 'BCN' },
    { label: 'Waves', value: 'WAVES' },
    { label: 'Bitcoin Diamond', value: 'BCD' },
    { label: 'RChain', value: 'RHOC' },
    { label: 'BitShares', value: 'BTS' },
    { label: 'Bytom', value: 'BTM' },
    { label: 'Maker', value: 'MKR' },
    { label: 'Aeternity', value: 'AE' },
    { label: 'Dodgecoin', value: 'DODGE' },
    { label: 'Augur', value: 'REP' },
    { label: '0x', value: 'ZRX' },
    { label: 'Veritaseum', value: 'VERI' },
    { label: 'Decred', value: 'DRC' },
    { label: 'Waltonchain', value: 'WTC' },
    { label: 'Status', value: 'SNT' },
    { label: 'Zilliqa', value: 'ZIL' },
    { label: 'Komodo', value: 'KMD' },
    { label: 'Aion', value: 'AION' },
    { label: 'Hshare', value: 'HSR' },
    { label: 'Ardor', value: 'ARDA' },
    { label: 'Ark', value: 'ARK' },
    { label: 'Cryptonex', value: 'CNX' },
    { label: 'Basic Attention Token', value: 'BAT' },
    { label: 'PIVX', value: 'PIVX' },
    { label: 'Loopring', value: 'LRC' },
    { label: 'KuCoin Shares', value: 'KCS' },
    { label: 'Factom', value: 'FCT' },
    { label: 'Nebulas', value: 'NAS' },
    { label: 'DigiByte', value: 'DGB' },
    { label: 'Ethos', value: 'ETHOS' },
    { label: 'QASH', value: 'QASH' },
    { label: 'IOStoken', value: 'IOST' },
    { label: 'MonaCoin', value: 'MONA' },
    { label: 'Golem', value: 'GNT' },
    { label: 'Gas', value: 'GAS' },
    { label: 'Dragonchain', value: 'DRGN' },
    { label: 'FunFair', value: 'FUN' },
    { label: 'Revain', value: 'R' },
    { label: 'GXChain', value: 'GXS' },
    { label: 'Electroneum', value: 'ETN' },
    { label: 'Syscoin', value: 'SYS' },
    { label: 'Storm', value: 'STROM' },
    { label: 'Kyber Network', value: 'KNC' },
    { label: 'aelf', value: 'ELF' },
    { label: 'Zcoin', value: 'XZC' },
    { label: 'Request Network', value: 'REQ' },
    { label: 'Substratum', value: 'SUB' },
    { label: 'SALT', value: 'SALT' },
    { label: 'Neblio', value: 'NEBL' },
    { label: 'Kin', value: 'KIN' },
    { label: 'Nxt', value: 'NXT' },
    { label: 'ReddCoin', value: 'RDD' },
    { label: 'Nucleus Vision', value: 'NCASH' },
    { label: 'Emercoin', value: 'EMC' },
    { label: 'Enigma', value: 'ENG' },
    { label: 'Byteball Bytes', value: 'GBYTE' },
    { label: 'ChainLink', value: 'LINK' },
    { label: 'MaidSafeCoin', value: 'MAID' },
    { label: 'Power Ledger', value: 'POWR' },
    { label: 'TenX', value: 'PAY' },
    { label: 'Dentacoin', value: 'DCN' },
    { label: 'Dent', value: 'DENT' },
    { label: 'Mithril', value: 'MITH' },
    { label: 'Bancor', value: 'BTN' },
    { label: 'Cindicator', value: 'CND' },
    { label: 'Metal', value: ',MTL' },
    { label: 'Nuls', value: 'NULS' },
    { label: 'Particl', value: 'PART' },
  ],
});
