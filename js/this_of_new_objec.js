// 实例化对象的this指向

function counter1(start){ 
    var count = start; 

    var increase = function(){
        count++;
    }; 

    var getValue = function(){
       return count;
    };

    return { 
        inc : increase, 
        get : getValue
    }
}

var c1 = new counter1(5);
c1.inc();
console.log(c1.get());   // 6


function counter2(start){ 
    var count = start;
    var increase = function(){
        // 1. 这里的this并非指向function内部，而是指向执行时的上下文，即实例化的c2
        //    由于counter2并未返回count属性，所以c2中不存在count，为undefined
        this.count++;
    };

    var getValue = function(){
        return this.count;
    };

    return { 
        inc : increase , 
        get : getValue
    }
}

var c2 = new counter2(5);
// 如 1. 所述，对undefined的count作++操作，得到的是 NaN
c2.inc(); 
console.log(c2.get());   // NaN
