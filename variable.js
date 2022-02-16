'use strict';

// function calculate(command, a, b)
// command(add, substract, divide, multiply, remainder)

function calculate(command, a, b){
    switch(command){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*" :
            return a*b;
        case "/":
            return a/b;
        case "%":
            return a%b;
        default : 
            return '해당하는 연산이 존재하지 않습니다.'
    }

}

console.log(calculate("+", 3,2))
console.log(calculate("*", 3,2))
console.log(calculate("%", 3,2))
console.log(calculate("/", 3,2))
console.log(calculate("-", 3,2))
