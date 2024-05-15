const maskify = (CarteCredit) => {
  if (CarteCredit.length <= 4) {
    return CarteCredit;
  }
  return '#' .repeat(CarteCredit.length -4) + CarteCredit.slice(-4);

}


console.log(maskify('4556364607935616')); //-> '############5616'
console.log(maskify('1')); //-> '1'
console.log(maskify('11111')); //-> '#1111'