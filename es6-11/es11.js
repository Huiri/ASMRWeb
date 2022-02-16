//Optional Chaining
{
    const person1 = {
        name : 'octopus-head',
        job : {
            title : 'student',
            professor : {
                name : '3J',
            },
        },
    };
    const person2 = {
        name : '3J',
    };
    function printManager(person){
        console.log(person.job.manager.name);
    }
    printManager(person1); //오류 X
    printManager(person2); //오류 발생

    {
        function printManager(person) {
            console.log(person.job
                ? person.job.manager
                    ? person.job.manager.name
                    : undefined
                :undefined
            );
        }
        printManager(person1);
        printManager(person1);
    }

    {
        function printManager(person){
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person1);
    }
    //optional chaining 활용
    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person1);
    }
}

//Nullish Coalescing Operator
{
    //논리연산자 OR
    //false : false, '', 0, null, undefined
    {
        const name = 'octopus-head';
        const userName = name || 'Guest';
        // ||(or) 연산자는 앞의 값이 false일때만 뒤의 값을 출력
        console.log(userName);
    }
    {
        const name = null;
        const userName = name || 'Guest';//문자열이 비어있는 경우 ''에도 뒤에 값 할당됨
        console.log(userName);
    }
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);

        const name = 0;
        const message = num || 'undefined';
        console.log(message);
            //OR 연산자 사용시 잘 파악해두기
    }
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
        // false로 인식되어지는 값들도 할당되어 있긴 하다면 null이 아니라면 뒤에 값 할당
    }
}