var result = 0;
var arr = [1,2,3,4]; 
for(i = 0; i < arr.length; i++) {
  if(arr[i]% 2 >3 ) {
    result += arr[i];
  }
}
console.log(result);