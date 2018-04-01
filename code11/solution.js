function cubeOdd(arr) {
  let total = 0;
  if (arr.length===0){return undefined;}
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i]=== "string"){return undefined;}
  }
  arr.map(x=>(x*x*x)).filter(x=>(x%2)).forEach(index=>total+=index);
  return total;
}