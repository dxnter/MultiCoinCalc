/**
 * Fetches [USD,GBP,EUR,JPY,CNY] prices of the coinTicker paramater
 * @param {String} coinTicker
 * @returns An object with key value pairs of currency abbreviations and exchanged price/coin.
 */
async function fetchPrices(coinTicker) {
  const prices = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${coinTicker}&tsyms=USD,GBP,EUR,JPY,CNY`
  );
  const pricesResponse = await prices.json();
  return pricesResponse;
}

/**
 * Fetches six of the latest news articles relating to cryptocurrency.
 * Since our firstSixArticles array is zero indexed we utilize that by
 * incrementally giving each DOM element that index. (ex: id="title2")
 * With the ID binding the function will insert the data inside the
 * DOM elements.
 */
async function fetchNewsArticles() {
  const firstSixArticles = await fetch(`https://min-api.cryptocompare.com/data/news/?lang=EN`)
    .then(rawNews => rawNews.json())
    .then(articles => articles.slice(0, 6));
  for (let i = 0; i < firstSixArticles.length; i++) {
    const articleImage = document.querySelector(`[id=image${CSS.escape(i)}]`);
    articleImage.src = `${firstSixArticles[i].imageurl}`;

    const articleLink = document.querySelector(`[id=url${CSS.escape(i)}]`);
    articleLink.href = `${firstSixArticles[i].url}`;

    const articleTitle = document.querySelector(`[id=title${CSS.escape(i)}]`);
    articleTitle.innerHTML = `${firstSixArticles[i].title}`;

    const articleSource = document.querySelector(`[id=source${CSS.escape(i)}]`);
    articleSource.innerHTML = `${firstSixArticles[i].source_info.name}`;

    const articleContent = document.querySelector(`[id=content${CSS.escape(i)}]`);
    const trimmedArticle = `${firstSixArticles[i].body.substring(0, 200)}`;
    articleContent.textContent = `${trimmedArticle}...`;
  }
}

/**
 * Finds the product of the price per coin and input quantity then updates the DOM input element.
 */
async function calculatePrice() {
  const inputCoinName = document.getElementById('inputCoinName').value;
  const inputCurrency = document.getElementById('inputCurrency').value;
  const inputQuantity = document.getElementById('inputQuantity').value.replace(/,/g, '');
  const { USD, GBP, EUR, JPY, CNY } = await fetchPrices(inputCoinName.toUpperCase());
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
  /**
   * eval(inputCurrency) will be interpreted as the *variable* that
   * was destructured from the API response on #53 which evaluates
   * to the price of one coin in a specific fiat currencyt. (ex: USD = 45.44)
   */
  const calculatedTotal = eval(inputCurrency) * inputQuantity;
  if (isNaN(calculatedTotal)) {
    document.getElementById('fiatValue').innerHTML = `${currencySymbol}0.00`;
  } else {
    document.getElementById('fiatValue').innerHTML = `${currencySymbol}${Number(calculatedTotal).toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
      }
    )}`;
  }
}

/** On page load calculate the price of 1 BTC and fetch latest news */
window.onload = function() {
  calculatePrice();
  fetchNewsArticles();
};
