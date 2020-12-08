/////////////////////////////////////////////////////////////////////////////
// MVVM
/////////////////////////////////////////////////////////////////////////////

function defineReactive(data, key, val) {
  observe(val); // 递归遍历所有子属性
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      return val;
    },
    set: function(newVal) {
      val = newVal;
      console.log('属性' + key + '已经被监听了，现在值为："' + newVal.toString() + '"');
    }
  });
}

function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(function(key) {
    defineReactive(data, key, data[key]);
  });
};

var library = {
  book1: {
    name: ''
  },
  book2: ''
};
observe(library);
library.book1.name = 'test1'; // 属性name已经被监听了，现在值为："test1"
library.book2 = 'test2';  // 属性book2已经被监听了，现在值为："test2"
