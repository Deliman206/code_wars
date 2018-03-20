function isNice(arr){
    let arr2 =[];
    if( arr.length===0){return false}
    for(let i=0;i<arr.length;i++){
      let n = arr[i];
      if(arr.includes(n-1)||arr.includes(n+1)){
        arr2.push('yes');
        
      }else{arr2.push('no');}
    }
      if(arr2.includes('no')){
        return false;
      }else{return true;}
    }