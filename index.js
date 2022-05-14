function factorize(num){
  var output=1;
  for (let i=2; i<=num; i++){
    output*=i;
    
  }
  return output;
  
}
var result=factorize(5);
console.log(result);