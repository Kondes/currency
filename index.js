let repeat;

do {
  let nameCurrency = prompt("Введи название валюты", "uah, eur, usd, rub, pln");
  let sum = +prompt("Введи сумму");
  let currencyConversion = prompt(
    "В какую валюту конвертировать",
    "uah, eur, usd, rub, pln"
  );

  switch (nameCurrency) {
    case "uah":
      if (currencyConversion === "usd") {
        alert(Math.round(sum * 0.038 * 100) / 100);
      } else if (currencyConversion === "eur") {
        alert(Math.round(sum * 0.032 * 100) / 100);
      } else if (currencyConversion === "rub") {
        alert(Math.round(sum * 2.72 * 100) / 100);
      } else if (currencyConversion === "pln") {
        alert(Math.round(sum * 0.15 * 100) / 100);
      }
      break;

    case "usd":
      if (currencyConversion === "uah") {
        alert(Math.round(sum * 25 * 100) / 100);
      } else if (currencyConversion === "eur") {
        alert(Math.round(sum * 0.86 * 100) / 100);
      } else if (currencyConversion === "rub") {
        alert(Math.round(sum * 70 * 100) / 100);
      } else if (currencyConversion === "pln") {
        alert(Math.round(sum * 4 * 100) / 100);
      }
      break;

    case "eur":
      if (currencyConversion === "uah") {
        alert(Math.round(sum * 30.48 * 100) / 100);
      } else if (currencyConversion === "usd") {
        alert(Math.round(sum * 1.15 * 100) / 100);
      } else if (currencyConversion === "rub") {
        alert(Math.round(sum * 83.13 * 100) / 100);
      } else if (currencyConversion === "pln") {
        alert(Math.round(sum * 4.6 * 100) / 100);
      }
      break;

    case "rub":
      if (currencyConversion === "uah") {
        alert(Math.round(sum * 0.36 * 100) / 100);
      } else if (currencyConversion === "eur") {
        alert(Math.round(sum * 0.012 * 100) / 100);
      } else if (currencyConversion === "usd") {
        alert(Math.round(sum * 0.013 * 100) / 100);
      } else if (currencyConversion === "pln") {
        alert(Math.round(sum * 0.055 * 100) / 100);
      }
      break;

    case "pln":
      if (currencyConversion === "uah") {
        alert(Math.round(sum * 6.61 * 100) / 100);
      } else if (currencyConversion === "eur") {
        alert(Math.round(sum * 0.21 * 100) / 100);
      } else if (currencyConversion === "rub") {
        alert(Math.round(sum * 18.04 * 100) / 100);
      } else if (currencyConversion === "usd") {
        alert(Math.round(sum * 0.25 * 100) / 100);
      }
      break;

    default:
      alert("Проверь правильность написания");
      break;
  }
} while ((repeat = confirm("Хочешь повторить?") !== false));
