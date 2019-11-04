// global.a 或 b 是在全局注册了一个property并赋值
// var/let c 是在全局创建了一个variable并赋值

// 注意： let a = b = 2 会被解析为 let a = (b = 2)，此时认为创建了一个global variable：b

global.a = 1;
b = 2;
let c = 3;

function foo() {
  // foo()中的this指向foo()所在的全局，而非foo()自己
  console.log(this.a);   // 1
  console.log(this.b);   // 2
  console.log(this.c);   // undefined
}

foo();
