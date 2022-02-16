// 조건부 연산자
// jsx 내부의 자바스크립트 표현식에서 if문 사용 x
// -> 조건이 필요한 경우 
// 1)jsx 밖에서 if 문 사용해 사전에 값 설정
// 2){ } 안에 조건부 연산자 사용

// (1) 조건부 연산자 ===(삼항연산자)
function App(){
  //  return(
        const name = '리액트';
        <div>
            {name === '리액트' ? (
                <h1>리액트입니다.</h1>
            ) : (
                <h2>리액트가 아닙니다.</h2>
            )}
        </div>
    
    //);
}

// (2) AND(&&) 연산자 사용한 조건부 렌더링
function App(){
    const name = '리왝트';
    <div>
        {name === '리액트' ? <h1>리액트입니다</h1> : null};
        {name === '리액트' && <h1>리액트입니다</h1>}
    </div>
    //null 렌더링 시 아무것도 보여주지 않음
    // 아래와 같이 && 연산자를 이용한 조건부 렌더링 : 리액트에서 false를 렌더링할 시 아무것도 보여주지 않음
    // * 주의! 0(false)과 같은 falsy한 값 입력시 화면에 나타남 
}


// Undefined 렌더링 피하기
function App(){
    const name = undefined;
    return name || '값이 undefined입니다'
    // jsx 내부에서 undefined 렌더링
    return <div>{name}</div>
    return <div>{name || '리액트'}</div>;
    // name 값이 undefined일 때 보여주고 싶은 문구가 있을 시 작성
}

// 인라인 스타일링
// dom 요소에 스타일 적용시 객체 형태로 카멜표기법 사용
function App(){
    const style = {
        backgroundColor : #FFFFFF,
        color : 'apua',
        fonstSize : '17px',
        fontWeight : 'bold',
        paddding : 16 //단위 생략 시 px 로 지정됨
    };
    return <div style={style}>name</div>
    //스타일 객체 선언하지 않고 바로 때려넣어도 됨 {{ 이 안에 작성하기 }}
}

// class -> className 사용
// 스타일 적용은 되지만 경고 나타남

