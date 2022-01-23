/*
async, await
 : promise를 간편하고 동기적으로 실행되는 것처럼 보이게 함
  - promise를 계속 chaining 하다보면 난잡해짐
    -> async, await 사용(promise + api)
       + 기존 존재, 존재하는 것 감싸서 간편하게 사용 가능한 api 제공 = syntactic sugar
         ex. class : 프로토타입을 베이스로 덧붙여진 것
*/

//async & await
// 깔끔하게 promise를 사용할 수 있는 방법

// 1. async
function fetchUser(){
    // 네트워크 통신을 통해 백엔드에서 데이터를 가져오는 함수(대략 10초 걸림)
    // 오래걸리는 일은 비동기적으로 처리해줘야 유저가 시간 낭비 X
    return new Promise((resolve, reject)=> {
        resolve('octopus-head');
    });
}

// 1. async
//위의 promise가 사용된 함수를 줄이는 법
async function fetchUser2(){
    return 'octopus-head';
}
//자동적으로 함수 안의 코드 블럭들이 promise로 변환됨

const user = fetchUser2();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
    // ms가 지나면 resolve 호출
}

async function getApple(){
    await delay(3000);
    // await을 사용하면 뒤의 함수가 끝날때까지 기다림
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

function getBanana_chaining(){
    return delay(3000)
    .then(() => 'banana');
    //chaining 함수
}


function pickFruits(){
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`)
    });
}
pickFruits().then(console.log);
// promise도 많은 chaining을 할 시 callback 지옥 발생

async function pickFruits2(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise();
    const banana = await bananaPromise();
    return `${apple} + ${banana}`;
    //try chatch문을 이용해 에러처리 가능
    // promise를 만들어서 (promise가 바로 실행됨) 호출
    // 각자 다른 데이터에 접근하므로 병렬적으로 수행
}
pickFruits2().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log)
// promise 배열을 전달하게 되면 모든 promise들이 병렬적을 전부 받을때까지 모아줌
// 다 받아지면 받아진 배열이 전달됨

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
// 배열의 promise 중 가장 먼저 값을 리턴하는 아이만 전달됨
