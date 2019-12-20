// 依赖注入基本原理

// 容器/服务提供商: 提供服务
var services = { 
  A: () => {console.log(1)}, 
  B: () => {console.log(2)},
  C: () => {console.log(3)}
}

// 待注入函数 
function Service(A, B) { 
  A();
  B();
}

// 注射器 
function Activitor(func, scope) { 
  return () => {
    func.apply(scope || {}, setFuncParams(getFuncParams(func)));
  }
}

// 功能1: 获取func的参数列表(依赖列表) 
getFuncParams = function (func) { 
  var matches = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m); 
  if (matches && matches.length > 1) {
    return matches[1].replace(/\s+/, '').split(','); 
  } else {
    return []; 
  }
}

// 功能2: 依次对应服务中的项进行查找返回结果
setFuncParams = function (params) { 
  for (var i in params) { 
      params[i] = services[params[i]]; 
  } 
  return params; 
};

// 实例化Service并调用方法 
var test = Activitor(Service); 
test();   //1 2

