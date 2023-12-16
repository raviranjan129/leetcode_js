let createCounter = function(init){

    let currentValue = init;
   
  

    return {
        increment: function(){
             currentValue +=1;  
             return currentValue;    
          
        },
        decrement: function(){
        currentValue -=1;
        return currentValue;
        },
        reset: function (){
             currentValue = init;
             return currentValue;

        }
    };
}
const counter = createCounter(5); // call and store create function;

console.log(counter.increment());  // increment the value  (output = 6)
console.log(counter.increment());  // increment the value  (output = 7)
console.log(counter.decrement());    // decrement the value  (output = 6) 
console.log(counter.decrement());      // decrement the value  (output = 5) 
console.log(counter.reset());      // reset the value (output = 5)



