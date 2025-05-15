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
convertValues()
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
