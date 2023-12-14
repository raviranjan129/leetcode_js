 


 let createCounter =function (n){

    let counterValue =n;

          //create counter function

    return function counter(){
           const currentValue = counterValue;
           counterValue +=1;
           return currentValue;
    }
     
 }
const myCounter = createCounter(10);
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
