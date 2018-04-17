const input = document.getElementById('inputCoinName');
new Awesomplete(input, {
  autoFirst: true,
  list: [
    {
      label: 'Bitcoin',
      value: 'BTC',
    },
    {
      label: 'Ethereum',
      value: 'ETH',
    },
    {
      label: 'Ripple',
      value: 'XRP',
    },
    {
      label: 'Bitcoin Cash',
      value: 'BCH',
    },
    {
      label: 'EOS',
      value: 'EOS',
    },
    {
      label: 'Litecoin',
      value: 'LTC',
    },
    {
      label: 'Cardano',
      value: 'ADA',
    },
    {
      label: 'Stellar',
      value: 'XLM',
    },
    {
      label: 'NEO',
      value: 'NEO',
    },
    {
      label: 'IOTA',
      value: 'MIOTA',
    },
    {
      label: 'Monero',
      value: 'XMR',
    },
    {
      label: 'Dash',
      value: 'DASH',
    },
    {
      label: 'TRON',
      value: 'TRX',
    },
    {
      label: 'NEM',
      value: 'XEM',
    },
    {
      label: 'Tether',
      value: 'USDT',
    },
    {
      label: 'VeChain',
      value: 'VEN',
    },
    {
      label: 'Ethereum Classic',
      value: 'ETC',
    },
    {
      label: 'Binance Coin',
      value: 'BNB',
    },
    {
      label: 'OmiseGO',
      value: 'OMG',
    },
    {
      label: 'Qtum',
      value: 'QTUM',
    },
    {
      label: 'Verge',
      value: 'XVG',
    },
    {
      label: 'Ontology',
      value: 'ONT',
    },
    {
      label: 'Lisk',
      value: 'LSK',
    },
    {
      label: 'ICON',
      value: 'ICX',
    },
    {
      label: 'Bytom',
      value: 'BTM',
    },
    {
      label: 'Zcash',
      value: 'ZEC',
    },
    {
      label: 'Steem',
      value: 'STEEM',
    },
    {
      label: 'Nano',
      value: 'NANO',
    },
    {
      label: 'Bitcoin Gold',
      value: 'BTG',
    },
    {
      label: 'Wanchain',
      value: 'WAN',
    },
    {
      label: 'Bitcoin Private',
      value: 'BTCP',
    },
    {
      label: 'Bytecoin',
      value: 'BCN',
    },
    {
      label: 'Populous',
      value: 'PPT',
    },
    {
      label: 'BitShares',
      value: 'BTS',
    },
    {
      label: 'DigixDAO',
      value: 'DGD',
    },
    {
      label: 'Siacoin',
      value: 'SC',
    },
    {
      label: 'Stratis',
      value: 'STRAT',
    },
    {
      label: 'RChain',
      value: 'RHOC',
    },
    {
      label: 'Dogecoin',
      value: 'DOGE',
    },
    {
      label: 'Decred',
      value: 'DCR',
    },
    {
      label: 'Waves',
      value: 'WAVES',
    },
    {
      label: 'Zilliqa',
      value: 'ZIL',
    },
    {
      label: 'Maker',
      value: 'MKR',
    },
    {
      label: 'Aeternity',
      value: 'AE',
    },
    {
      label: 'Bitcoin Diamond',
      value: 'BCD',
    },
    {
      label: 'Status',
      value: 'SNT',
    },
    {
      label: '0x',
      value: 'ZRX',
    },
    {
      label: 'Loopring',
      value: 'LRC',
    },
    {
      label: 'Komodo',
      value: 'KMD',
    },
    {
      label: 'Aion',
      value: 'AION',
    },
    {
      label: 'Hshare',
      value: 'HSR',
    },
    {
      label: 'Augur',
      value: 'REP',
    },
    {
      label: 'KuCoin Shares',
      value: 'KCS',
    },
    {
      label: 'Ardor',
      value: 'ARDR',
    },
    {
      label: 'IOStoken',
      value: 'IOST',
    },
    {
      label: 'Waltonchain',
      value: 'WTC',
    },
    {
      label: 'Ark',
      value: 'ARK',
    },
    {
      label: 'aelf',
      value: 'ELF',
    },
    {
      label: 'DigiByte',
      value: 'DGB',
    },
    {
      label: 'Cryptonex',
      value: 'CNX',
    },
    {
      label: 'PIVX',
      value: 'PIVX',
    },
    {
      label: 'Golem',
      value: 'GNT',
    },
    {
      label: 'Basic Attention Token',
      value: 'BAT',
    },
    {
      label: 'Factom',
      value: 'FCT',
    },
    {
      label: 'Centrality',
      value: 'CENNZ',
    },
    {
      label: 'QASH',
      value: 'QASH',
    },
    {
      label: 'MonaCoin',
      value: 'MONA',
    },
    {
      label: 'Substratum',
      value: 'SUB',
    },
    {
      label: 'Mithril',
      value: 'MITH',
    },
    {
      label: 'Dragonchain',
      value: 'DRGN',
    },
    {
      label: 'Veritaseum',
      value: 'VERI',
    },
    {
      label: 'Nebulas',
      value: 'NAS',
    },
    {
      label: 'Elastos',
      value: 'ELA',
    },
    {
      label: 'Gas',
      value: 'GAS',
    },
    {
      label: 'Mixin',
      value: 'XIN',
    },
    {
      label: 'Ethos',
      value: 'ETHOS',
    },
    {
      label: 'GXChain',
      value: 'GXS',
    },
    {
      label: 'Kyber Network',
      value: 'KNC',
    },
    {
      label: 'FunFair',
      value: 'FUN',
    },
    {
      label: 'Syscoin',
      value: 'SYS',
    },
    {
      label: 'Electroneum',
      value: 'ETN',
    },
    {
      label: 'Byteball Bytes',
      value: 'GBYTE',
    },
    {
      label: 'Nxt',
      value: 'NXT',
    },
    {
      label: 'Revain',
      value: 'R',
    },
    {
      label: 'ReddCoin',
      value: 'RDD',
    },
    {
      label: 'Skycoin',
      value: 'SKY',
    },
    {
      label: 'SALT',
      value: 'SALT',
    },
    {
      label: 'MaidSafeCoin',
      value: 'MAID',
    },
    {
      label: 'Power Ledger',
      value: 'POWR',
    },
    {
      label: 'ZCoin',
      value: 'XZC',
    },
    {
      label: 'Nucleus Vision',
      value: 'NCASH',
    },
    {
      label: 'Bancor',
      value: 'BNT',
    },
    {
      label: 'ChainLink',
      value: 'LINK',
    },
    {
      label: 'Storm',
      value: 'STORM',
    },
    {
      label: 'Neblio',
      value: 'NEBL',
    },
    {
      label: 'WAX',
      value: 'WAX',
    },
    {
      label: 'Enigma',
      value: 'ENG',
    },
    {
      label: 'Storj',
      value: 'STORJ',
    },
    {
      label: 'TenX',
      value: 'PAY',
    },
    {
      label: 'Request Network',
      value: 'REQ',
    },
  ],

});

document.getElementById('inputCoinName').addEventListener('awesomplete-selectcomplete',function(){
  calculatePrice();
});