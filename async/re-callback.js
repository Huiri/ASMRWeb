class Counter {
     constructor(runEveryFiveTimes){
        //  타입스크립트의 경우 인자를 꼭받아야하는지 설정 가능 ?  == nullable
        ///인자로 안 넘겨주면 undefind으로 오류남
         this.counter=0;
        this.callback = runEveryFiveTimes;
     }
     increase(){
         this.counter++;
         console.log(this.counter);
         if(counter % 5 === 0){
            //printSomething(this.counter);
            this.callback(this.counter);
            this.callback && this.callback(this.counter);
         }
     }
     //클래스 안에서는 함수function이라고 선언안해도 됨
}

function printSomething(num){
    console.log(`${num} 5times`);
}
function alertSomething(num){
    alert(`${num} 5times`);
}
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertSomething);
//클래스에 원하는 콜백함수를 넘겨서 우너할 때 꺼내옴
//콜백을 이용하면 클래스의 재사용성이 높아짐(다양한 오브젝트 생성 가능)


coolCounter.increase();
coolCounter.increase();
