/*
Promise : 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트
- 정해진 장시간의 기능을 수행하고 나서 정상적으로 실행 완료시 -> 결과값, 성공 메세지
- 문제 발생시 -> 에러 전달
1) state : 수행중(pending), 성공(fulfiled), 실패(rejected)
2) producer : 원하는 기능을 수행해 해당하는 데이터를 만듬
3) customer : 원하는 데이터를 소비
*/

// 1. Producer
// 새로운 promise가 생성되면 executor가 자동으로 바로 실행됨
let promise = new Promise((resolve, reject) => {
    // doing some heavy work(네트워크 통신, 파일 읽어오기)
    // -> 비동기적으로 실행이 좋음
    console.log('doing something..');
    setTimeout(() => {
        resolve('chaz');
        // reject(new Error('no network'));
    }, 2000);

    // promise를 만드는 순간 excute라는 callback 함수 바로 실행
    //  -> promise 안에 네트워크 통신을 하는 코드 -> promise가 만들어진 그 순간 네트워크 통신
    // 사용자가 요청한 경우에만 네트워크 통신을 해야하는 경우(ex. 버튼 클릭)
    //  -> 불필요한 네트워크 통신 발생! 유의!!
});

// 2. Consumers : then, catch, finally(로 값 받아오기 가능)
promise.then((value)=> {
    console.log(value);
    // then은 promise가 정상적으로 잘 수행되어 resolve라는 callback 함수를 통해 전달한 값이 parameter로 전달되어 들어옴
    // then은 성공 케이스
})
.catch(error=>{
    console.log(error);
    // then은 똑같은 promise를 리턴 -> 리턴된 promise의 catch를 다시 리턴

})
.finally(()=>{
    console.log('finally')
    // 성공 실패 여부에 상관없이 무조건 마지막에 수행
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
});
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));
// then은 값을 바로 전달해도 되고 promise를 전달해도 됨

// 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('꼬기오'), 1000);
});
const getEgg = hen =>
new Promise((resolve, reject) =>{
    // setTimeout(()=> resolve(`${hen} => 알`), 1000);
    setTimeout(()=> reject(new Error(`error! ${hen} => 알`)), 1000);

});
const cook = egg =>
new Promise((resolve, reject) =>{
    setTimeout(()=> resolve(`${egg} => 맥반석`), 1000);
});

getHen()
// .then(hen => getEgg(hen))
.then(getEgg)
.catch(error => {
    return '빵'
})//값 받아오는 거 실패시 빵을 대신 넣어줌
// callback 함수 전달할 때
// 받아오는 value를 한가지만 받아서 다른 함수로 바로 호출하는 경우 다음과 같이 생략 가능
// then 에서 받아오는 값을 바로 callback(getEgg) 함수로 전달
.then(cook)
.then(console.log)
.catch(console.log);
