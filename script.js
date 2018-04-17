/*
 * @param {String} coinTicker
 * @param {String} fiatCurrency
 * @returns A string of the exchanged price of a coin per inputCurrency
 */

const fetchFiatPrice = (coinTicker, inputCurrency) => {
  return fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coinTicker}&tsyms=${inputCurrency}`)
    .then(data => data.json())
    .then(price => Object.values(price)[0])
}

/*
 * Finds the product of the price per coin and input quantity then updates the DOM input element.
 */

async function calculatePrice() {
  const inputCoinName = document.getElementById('inputCoinName').value;
  const inputCurrency = document.getElementById('inputCurrency');
  const fiatCode = inputCurrency.value;
  const currencySymbol = inputCurrency.options[inputCurrency.selectedIndex].text;
  document.getElementById('currencySymbol').textContent = currencySymbol.slice(0, 1);
  const inputQuantity = document.getElementById('inputQuantity').value.replace(/,/g, '');

  const coinPrice = await fetchFiatPrice(inputCoinName.toUpperCase(), fiatCode);
  const calculatedTotal = coinPrice * inputQuantity;
  if (isNaN(calculatedTotal)) {
    document.getElementById('fiatValue').value = '0.00';
  } else {
    document.getElementById('fiatValue').value = `${Number(calculatedTotal).toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
      }
    )}`;
  }
}

/* On page load calculate the price of 1 BTC */
window.onload = function () {
  calculatePrice();
};
