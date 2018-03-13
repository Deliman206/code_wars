function abbrevName(name){
  let splitName = name.split(' ');
  return `${splitName[0].charAt(0).toUpperCase()}.${splitName[1].charAt(0).toUpperCase()}`;
}