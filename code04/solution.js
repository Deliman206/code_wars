function capitalize(s){
    let even = '';
    let odd = '';
    for (let i=0; i<s.length; i++){
      if (i%2){
        even+=s.charAt(i).toUpperCase();
        odd+=s.charAt(i).toLowerCase();
      }
      else{
        even+=s.charAt(i).toLowerCase();
        odd+=s.charAt(i).toUpperCase();
      }
    }
    return [odd, even];
  }