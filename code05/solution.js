function validatePIN (pin) {
  let test4 = /^\d\d\d\d$/.test(pin);
  let test6 =/^\d\d\d\d\d\d$/.test(pin);
  if (pin.length === 4 || pin.length === 6){
      if(test4 || test6){return true;}
  }
return false;
}