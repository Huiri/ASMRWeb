// Shorthand property names
// key와 name이 동일한 경우에는 짧게 작성 가능
{
    const chaz = {
        name : 'Chaz',
        age : '23'
    };

    const name = 'Chaz';
    const age = 23;

    const chaz2 = {
        //name : name,
        name,
        //age : age
        age
    };
}

//Destucturing saaignment

//object
{
    const student = {
        name ='Chaz',
        level :1,
    };
    
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
        
    }
    {
        const {name, level} = student;
        console.log(name, level);
        //오브젝트의 키의 이름을 괄호 안에 작성해주면 각각 네임에 맞게 할당됨
    
        // 만약 클래스에 선언된 이름이 아닌 다른 이름으로 하고 싶은 경우
        const {name : studentName, level : studentLevel}
        console.log(studentName, studentLevel);
    }
    //배열에서도 사용 가능
    const animals = ['개', '고양이'];
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }
    {
        const [first, second] = animals;
        console.log(first, second);
    }
    // 오브젝트의 경우 {}
    // 배열의 경우 []
}
//Spread syntax
{
    const obj1 = {key : 'key1'};
    const obj2 = {key : 'key2'};
    const array = [obj1, obj2];

    //배열을 복사하려면?
    const arrayCopy = [...array];
    //array에 있는 아이템을 낱개로 가져와 복사함

    // 새 값을 추가하려면?
    const arrayCopy = [...array, {key : 'key3'}];
    console.log(array, arrayCopy, arrayCopy2);
    //*** 오브젝트의 값이 아닌 참조값(주소값)을 복사함
    // 원래 값이 변경되면 전부 영향을 받음

    //array concatenation
    const fruits1 = ['복숭아', '딸기'];
    const fruits2 = ['바나나', '키위'];
    const fruits = [...fruits1, ...fruits2] //병합
    console.log(fruits);

    //object merge
    const dog1 = {dog1 : '멍멍'};
    const dog2 = {dog2 : '왈왈'};
    const dog = {...dog1, dog2};
    console.log(dog);
    // *** 만약 키가 동일한 오브젝트 병합시 제일 마지막에 오는 아이가 앞에 있는 걸 덮어씀
}

//Default parameters
{
    {
        function printMessage(message){
            if(message == null){
                message = 'default message'
            }
            console.log(message);
        }

        function printMessage(message = 'default message'){
            //인자가 전달되지 않을 시 바로 선언된 값이 출력됨
            console.log(message);
        }
        printMessage('hello');
        printMessage(); //undefined라는 오류? 출력
    }
}

// Ternary Operator
{
    const isCat = true;
    {
        let component;
        if(isCat){
            component = '야옹';
        } else {
            component = '먀용';
        }
        console.log(component);
    }
    const component = isCat ? '야옹' : '먀용';
    console.log(component);
    console.log(isCat?'야옹' : '먀용');

}

//Template Literals
{
    const weather = '우르르쾅쾅';
    const temparature = '16도씨';

    console.log('Today weather is ' + weather + ' and temparature is ' + temparature);
    console.log(`Today weather is ${weather} and temparature is ${temparature}`);
}