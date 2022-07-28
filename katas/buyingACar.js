const calculateLoss = (price, perc) => (price * perc) / 100;

const calculatePrice = (price, percentLoss) =>
  price - calculateLoss(price, percentLoss);

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  // ile ma hajsu na zakup
  let priceNew = startPriceNew;
  let priceOld = startPriceOld;
  let percentLoss = percentLossByMonth;
  let available = priceOld;
  let i = 0;

  while (available <= priceNew) {
    // oblicz cenę samochodu kupowanego co miesiąc
    i++;
    if (i % 2 === 0) {
      // rośnie o 0.5
      percentLoss += 0.5;
      priceNew = calculatePrice(priceNew, percentLoss);
      priceOld = calculatePrice(priceOld, percentLoss);
    } else {
      priceNew = calculatePrice(priceNew, percentLoss);
      priceOld = calculatePrice(priceOld, percentLoss);
    }
    available += savingperMonth;
    let tempAvailable = available - priceNew;
    console.log(
      `end month ${i}, available ${tempAvailable} price: ${priceOld}`
    );
  }
  return i;
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
console.log(nbMonths(12000, 8000, 1000, 1.5));

console.assert(calculateLoss(2000, 1.5) === 30);
