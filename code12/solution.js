function high(x){
  let alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let array= x.split(' ');
  let points= [];
  let val1 = points[points.length - 1];
  let val2 = points[points.length - 2];
  for(let i=0;i<array.length; i++){
    let total={num:0,string:array[i]};
    for (let j=0; j<array[i].length;j++){
      let letter = array[i].charAt(j);
      total.num+=alphabet.indexOf(letter)+1;
    }
  points.push(total);
  } 
  points.sort(function(a, b) {return a.num - b.num;});
  if(val1.num===val2.num){return val2.string;}
  return val1.string;
}