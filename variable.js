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
    }

}

console.log(calculate("+", 3,2))
console.log(calculate("*", 3,2))
console.log(calculate("%", 3,2))
console.log(calculate("/", 3,2))
console.log(calculate("-", 3,2))
