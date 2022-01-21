/*HTTP : Hypertext Transfer Protocol
 - 웹사이트, 어플리케이션 클라이언트와 서버가 어떻게 통신할 수 있는지 정의한 것
 - 하이퍼 텍스트를 어떻게 주고받을 것인지 규약한 통신 규약
 - 클라이언트 -(request)-> 서버 서버 -(response)-> 클라이언트
 - hypertext : 링크, 문서, 이미지 파일 포함
 ajax(Asynchronous JavaScript and XML)
  - 서버에서 동적으로 받아올 수 있는 기술
   ex. XHR(XMLHttpRequest) 오브젝트
    - 브라우저 api에서 제공
  - 신규 fetch() api(but ie에서 지원 X 어쩔 티비)
xml은 html과 같은 마크업 언어 중 하나
 - xml은 불필요한 태그로 인해 파일 사이즈가 커지고, 가독성이 떨어짐
 */
/*
JSON(JavaScript Object Notation)
 - 서버와 데이터를 주고받는 경우, 오브젝트를 파일 시스템에 저장하는 경우
  - 언어와 플랫폼에 상관없이 사용 가능
   - serialize : object -> json
   - deserialize : json -> object
*/

// 1. Object to JSON(stringify)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${name} can jump!`);
    },
    //함수는 object -> json 변환시 포함X
    //데이터가 아니기 때문
    // symbol 같은 js에만 있는 데이터도 포함 X

};
json = JSON.stringify(rabbit);
console.log(json);

//원하는 property만 골라서 정의하면 해당하는 property만 json으로 변환
json = JSON.stringify(rabbit, ["name"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'chaz' : value;
});
console.log(json);
// 함수의 이름은 동일하지만 parameter의 개수나 종류에 따라 다른 방식으로 호출 가능
// -> Oberloading (stringpy, parse)

// 2. JSON -> Object (parse(json))
console.clear();
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();
// obj.jump();
// 오류나는 이유는 함수는 json 타입으로 변경 X

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// 밑에 줄의 obj(json)이 오류나는 이유는 string이기 때문
// 즉 getDate 라고 하는 api가 존재 X
