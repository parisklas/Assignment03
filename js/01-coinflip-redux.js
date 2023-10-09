
var coinFlip;
let timesFlipped = parseInt(prompt('How many times should the coin be flipped?'));


for (let i = 0; i <= timesFlipped; i++) {
  coinFlip = Math.round(Math.random())
  console.log(coinFlip);
  if (coinFlip == 0) {
    var flipResult = 'Heads'
    console.log(flipResult)
  } else if (coinFlip == 1) {
    var flipResult = 'Tails'
    console.log(flipResult)
  };
}

