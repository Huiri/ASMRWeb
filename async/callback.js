'use strict';
/*

JavaScript is synchronous(동기적)
-> hoisting이 된 후부터 코드가 우리가 작성한 순서에 맞춰 
하나하나씩 동기적으로 실행된다는 의미

* hoisting이란? 
  : var이나 function 선언이 가장 위로 끌어올라가는 것
    -> hoisting 이후부터 코드가 자동적으로 실행됨

Asyncronous는 비동기적 : 언제 코드가 실행될지 알수 없음
ex. setTimeout(브라우저에서 제공되는 web api)
    지정한 시간이 지나면 지정한 함수를 콜백으로 호출
브라우저 api는 브라우저에게 요청 
  -> 응답을 기다리지 않고 다음 실행
  -> 브라우저가 callback 신호 보내면 실행

*/

// Synchronous callback
function printImmediately(print){
    print(print);    
}

printImmediately(()=> console.log('hello'));
// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

// prompt, confirm 으로 입력 받기 가능
// prompt(나타나는 글, (입력창에 입력이 된 상태로 보여짐))
// confirm은 사용장게 동의를 구함
// 확인(true), 취소(cancel) 버튼 

// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'chaz' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=> {
            if(user === 'chaz') {
                onSuccess({name : 'chaz', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
let userStorage = new UserStorage();

let id = prompt('enter your id');
let password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user=> {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
                },
                error => {
                    console.log(error);
                }
            );
}, error => {
    console.log(error);
}
);