var small = {
  a: 1,
  go: function(b,c,d){
    console.log(this.a+b+c+d);
  }
}
var large = {
  a: 100
}
small.go(2,3,4);
// 1+2+3+4 => 10
var bindTest = small.go.bind(large,2);
console.log(bindTest);
// function (b,c,d){console.log(this.a+b+c+d);}
bindTest(3,4);
// 100+2+3+4 => 109