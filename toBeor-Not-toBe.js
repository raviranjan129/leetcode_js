 let expect = function(val){
 
    return {
        
        toBe: (otherVal)=>{
           if(val !== otherVal){
          console.log ("Not Equal");   // throw new error("Not Equal")
           }
           return true;

        },
        notToBe: (otherVal)=>{
 if (val === otherVal){
    console.log ("Equal");   //  throw new error(" Equal")
 }
 return true;

        }
    };
 }
 
 //tryStatements :- The statements to be executed.
 //catchStatements :-Statement that is executed if an exception is thrown in the try block.


 try{
    expect(5).toBe(5);
    expect(5).notToBe(5);

 }catch(error){
    console.log("Test Result:",error.message);
 }
 
