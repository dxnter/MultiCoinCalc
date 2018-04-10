const inputCoinName = document.getElementById('inputCoinName').value;
const inputCurrency = document.getElementById('inputCurrency').value;
const inputQuantity = document.getElementById('inputQuantity').value.replace(/,/g, '');
/*
 * Fetches [USD,GBP,EUR,JPY,CNY] prices of the coinTicker paramater
 * @param {String} coinTicker
 * @returns An object with key value pairs of currency abbreviations and exchanged price/coin.
 */
async function fetchFiatPrices(coinTicker) {
  const prices = await fetch(
    `https://min-api.cryptocompsare.com/data/price?fsym=${coinTicker}&tsyms=USD,GBP,EUR,JPY,CNY`
  );
  const pricesResponse = await prices.json();
  return pricesResponse;
}

/*
 * Finds the product of the price per coin and input quantity then updates the DOM input element.
 */
async function calculatePrice() {
  const { USD, GBP, EUR, JPY, CNY } = await fetchFiatPrices(inputCoinName.toUpperCase());
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
  /*
   * eval(inputCurrency) will be interpreted as the *variable* that
   * was destructured from the API response on #58 which evaluates
   * to the price of one coin in the specific fiat currency
   * fetchFiatPrices(BTC)
   * {
      USD	6778.98
      GBP	4815.77
      EUR	5497.37
      JPY	730384.72
      CNY	44659.5
    }
   */
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

/*
 * @param {Array} Array of news article objects
 * Since our newsArticles array is zero indexed we utilize that by
 * incrementally giving each DOM element that index. (ex: id="title2")
 * With the ID binding the function will insert the data inside the
 * DOM elements.
 */
function updateNewsCards(newsArticles) {
  for (let i = 0; i < newsArticles.length; i++) {
    const articleImage = document.querySelector(`[id=image${CSS.escape(i)}]`);
    articleImage.src = `${newsArticles[i].imageurl}`;

    const articleLink = document.querySelector(`[id=url${CSS.escape(i)}]`);
    articleLink.href = `${newsArticles[i].url}`;

    const articleTitle = document.querySelector(`[id=title${CSS.escape(i)}]`);
    articleTitle.innerHTML = `${newsArticles[i].title}`;

    const articleSource = document.querySelector(`[id=source${CSS.escape(i)}]`);
    articleSource.innerHTML = `${newsArticles[i].source_info.name}`;

    const articleContent = document.querySelector(`[id=content${CSS.escape(i)}]`);
    const trimmedArticle = `${newsArticles[i].body.substring(0, 200)}`;
    articleContent.textContent = `${trimmedArticle}...`;
  }
}

/**
 * Fetches six of the latest news articles related to cryptocurrency.
 */
async function fetchNewsArticles() {
  const firstSixArticles = await fetch(`https://min-api.cryptocompare.com/data/news/?lang=EN`)
    .then(rawNews => rawNews.json())
    .then(articles => articles.slice(0, 6));
  updateNewsCards(firstSixArticles);
}

/* On page load calculate the price of 1 BTC and fetch latest news */
window.onload = function() {
  calculatePrice();
  fetchNewsArticles();
};
