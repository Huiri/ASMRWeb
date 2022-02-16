// 함수 선언
// 함수 호출

// 1. 함수 선언
function doSomething(add){
    console.log(add);
    const result = add(2,3);
    console.log(result);
}
function add(a, b){
    const sum = a+b;
    return sum;
}
// 함수 1) 기능 수행 2) 계산 후 특정 값 전달 
// 2. 함수 호출
doSomething();

const result = add(1, 2);
console.log(result);

doSomething(add);
///함수를 전달하면 그 함수 가 나옴
// 함수를 호출해버리는 경우 함수명만 선언

const addFun = add;
console.log(addFun);
addFun(4,5);