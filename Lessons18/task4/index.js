// function saveCalls() {

//   function test(a, b) {
//     return Math.sqrt(a*a + b*b);
//   }
  
//   const testWithMemory = saveCalls(test);
//   testWithMemory(2,4);
//   testWithMemory(9,1);
  
//  testWithMemory.calls;
  
//   const user = {
//     name: 'John',
//     sayHi() {
//       return this.name;
//     },
//   };
  
//   const methodWithMemory = saveCalls(user.sayHi);
//   methodWithMemory.apply({ name:'Tom' });
//   methodWithMemory.calls;
// }

function saveCalls(func) {
  const calls = [];

  function withMemory(...args) {
    calls.push(args);
    return func.apply(this, args);
  }

  withMemory.calls = calls;

 return withMemory;
}


console.log(saveCalls());

///   ////
