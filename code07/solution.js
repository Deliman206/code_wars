function transform(array){
    if(array=== null||array.length===0){return '';}
    let filter = array.filter(x=>x);
    console.log(filter);
    return (filter.length >=2) ? filter.join(', ').replace(/,(?=[^,]*$)/, ' and'):filter.join('');
  } 