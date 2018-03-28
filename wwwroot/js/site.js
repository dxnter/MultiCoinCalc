M.AutoInit();

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
 * Finds the product of the price per coin and input quantity and updates the DOM input element.
 */
async function calculatePrice() {
  const inputCoinTicker = document.getElementById('inputCoinTicker').value;
  const inputCurrency = document.getElementById('inputCurrency').value;
  const inputQuantity = document.getElementById('inputQuantity').value.replace(/,/g, '');
  const { USD, GBP, EUR, JPY, CNY } = await fetchCoinPrices(inputCoinTicker.toUpperCase());
  if (!inputQuantity || !inputCoinTicker || !inputCurrency) return;
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
  document.getElementById('fiatValue').value = Number(calculatedTotal).toLocaleString();
  document.getElementById('currencySymbol').innerHTML = currencySymbol;
  console.log(`${inputQuantity} ${inputCoinTicker} is ${currencySymbol}${Number(calculatedTotal).toLocaleString()}`);
}

$(document).ready(() => {
  $('input.autocomplete').autocomplete({
    data: {
      Apple: null,
      Microsoft: null,
      Google: 'https://placehold.it/250x250',
    },
  });
});
