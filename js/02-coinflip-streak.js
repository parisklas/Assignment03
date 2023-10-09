let coinFlip;

do {
  coinFlip = Math.round(Math.random())
  if (coinFlip == 0) {
    var flipResult = 'Heads'
    console.log(flipResult)
  } else if (coinFlip == 1) {
    var flipResult = 'Tails'
    console.log(flipResult)
  }
} while (flipResult === 'Heads');