// global.a 或 b 是在全局注册了一个属性并赋值
// var/let c 是在全局创建了一个变量并赋值
global.a = 1;
b = 2;
var c = 3;

function foo() {
  console.log(this.a);   // 1
  console.log(this.b);   // 2
  console.log(this.c);   // undefined
}

foo();
