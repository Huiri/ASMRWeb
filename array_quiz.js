
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  for(let fruit of fruits){
    console.log(fruit);
  }
  const result = fruits.join(', ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  let fruits1 = fruits.split(', ');
  console.log(fruits1);
  
  //split은 limit 설정 가능
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
    let array1 = array.reverse();
    console.log(array1);
    //배열 자체를 변환시킴
    //array를 콘솔에 찍어도 역순으로 나옴

}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  let arr = array.slice(0, 2)
  console.log(arr);
  //splice는 배열 자체를 변경시킴
  //slice(start, end) 이때 end는 배제됨
  // 배열에서 원하는 부분만 return 해서 받고 싶은 경우 slice 사용하기
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  let result = students.find((student)=> student.score === 90);

    // console.log(student, index)
  console.log(result);
  //find는 콜백 함수를 만들어 return 해야함
  //첫번째 값을 찾자마자 찾아진 값을return
  //찾지 못하는 경우 undefinded return
  //배열에 있는 모든 요소들마다 콜백되어짐
}

// Q6. make an array of enrolled students
{
  let result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let result = students.map((student) => student.score);
  console.log(result);
  //콜백함수로 전달되는 인자의 변수명은 최대한 이해하기 쉽도록 작성하는 것이 중요
}

// Q8. check if there is a student with the score lower than 50
{
  let result = students.some((student)=>student.score<50);
  console.log(result);
  //하나라도 특정 조건을 만족하는 경우 true 리턴
  let result2 = students.every((student)=>student.score<50);
  let result3 = !students.every((student)=>student.score<50);
  console.log(result2);
  console.log(result3);
  //배열의 모든 값들이 조건을 만족하는 경우 true 리턴
  //!를 붙이면 false 라면 true로 true라면 false로 리턴
}

// Q9. compute students' average score
{
  let result = students.reduce((prev, curr)=> prev + curr.score, 0); 
  console.log(result /students.length);
  //initial value 초기값 설정(prev)
  //배열에 있는 모든 값을 누적, 모아놓을 때 사용
  //2번째 호출부터는 prev 값이 undefined
  //   -> return 값을 잇어야함
  //배열값 하나하나씩 curr에 전달됨 다음 단계에서 curr -> prev

  //reduceRight은 배열의 맨 마지막 값부터 시작
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let result = students
  .map((student) => student.score)
  //.filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let result = students
  .map((student) => student.score)
  .sort((a, b)=> a -b)
  .join();
  console.log(result);
  //이전 값과 현재 값 전달
  // -값을 리턴하게 될 경우 첫번째가 두번째보다 작다고 간주됨
}