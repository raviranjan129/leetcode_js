function createHelloWorld(){
    return function (){
       return "Hello world";
    }
 
}
const helloworldFunction = createHelloWorld();
console.log(helloworldFunction());