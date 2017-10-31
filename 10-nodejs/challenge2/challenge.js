var hackers = [
  {
    name: 'jon',
    dangerous: false,
    hourlyRateFee: 100
  },
  {
    name: 'fiona',
    dangerous: true,
    hourlyRateFee: 220
  },
  {
    name: 'ryan',
    dangerous: false,
    hourlyRateFee: 70
  }
];

// hackers
//   select all harmless hackers
//   extract hourlyRateFee
//   add GSD to each
//   sum

hackers
  .filter(isHarmless)
  .map(pluckHourlyRate)
  .reduce(sum)

function isHarmless(hacker) {
  return hacker.dangerous === false;
}
// etc... pluckHourlyRate and sum

var total = hackers
  .filter(function(){

  })
  .map(function(){

  })
  .reduce(function(){

  })

var harmlessHackers = hackers.filter(function(hacker){
  return hacker.dangerous === false;
})
console.log(harmlessHackers);

var fees = harmlessHackers.map(function(harmlessHacker){
  return harmlessHacker.hourlyRateFee;
})
console.log(fees);

var feesWithGSD = fees.map(function(fee){
  return fee * 1.1;
})
console.log(feesWithGSD);

var totalHarmlessFees = feesWithGSD.reduce(function(accum, feeWithGSD){
  return accum + feeWithGSD;
})
console.log(totalHarmlessFees);



// total hourly rate of harmless hackers
// average hourly rate of harmless hackers
// increase each fee by 10%
