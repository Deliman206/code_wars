function mutateMyStrings(stringOne, stringTwo){
  let array1 = stringOne.split('');
  let array2 = stringTwo.split('');
  solution=`${array1.join('')}\n`;
  for(let i=0;i<array1.length;i++){
  if(array1[i]!==array2[i]){
    array1[i]=array2[i];
    solution+=`${array1.join('')}\n`;
  }
}
return solution;
}