const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues(){

  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.4;
  const bitcoinToday = 577.648
  const realToday = 0.13

  if (currencySelect.value == "Dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "Euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
    if (currencySelect.value == "Libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencySelect.value == "Real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }
   if (currencySelect.value == "BitCoin") {
  currencyValueConverted.innerHTML = formatBTC(inputCurrencyValue / bitcoinToday);
}

function formatBTC(value, locale = 'en-US') {
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 8,
    maximumFractionDigits: 8
  });

  return `₿${formatter.format(value / bitcoinToday )}`;
}

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img")

  

  if (currencySelect.value == "Dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png"
  }

  if (currencySelect.value == "Euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png"
  }

  if (currencySelect.value == "Libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png"
  }
  if (currencySelect.value == "BitCoin") {
    currencyName.innerHTML = "BitCoin";
    currencyImage.src = "./assets/bitcoin.png"
  }
  if (currencySelect.value == "Real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./assets/real.png"
  }
convertValues()
}

const rates = {
      BRL: 1,
      USD: 5.2,
      EUR: 6.2,
      GBP: 7.4,
      BTC: 577648
    };

    function convertCurrency(value, from, to) {
      const valueInBRL = from === "BRL" ? value : value * rates[from];
      const converted = to === "BRL" ? valueInBRL : valueInBRL / rates[to];
      return converted;
    }

    function formatCurrency(value, currency) {
      if (currency === "BTC") {
        return `₿${value.toFixed(8)}`;
      }

      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency,
      }).format(value);
    }

    function handleConvert() {
      const value = Number(document.querySelector("#input").value);
      const from = document.querySelector("#from-currency").value;
      const to = document.querySelector("#to-currency").value;

      if (!value || value <= 0) {
        document.querySelector("#result").innerText = "Digite um valor válido.";
        return;
      }

      const converted = convertCurrency(value, from, to);
      const formatted = formatCurrency(converted, to);

      document.querySelector("#result").innerText = formatted;
    }

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
