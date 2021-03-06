
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
  const fruits = '๐, ๐ฅ, ๐, ๐';
  let fruits1 = fruits.split(', ');
  console.log(fruits1);
  
  //split์ limit ์ค์  ๊ฐ๋ฅ
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
    let array1 = array.reverse();
    console.log(array1);
    //๋ฐฐ์ด ์์ฒด๋ฅผ ๋ณํ์ํด
    //array๋ฅผ ์ฝ์์ ์ฐ์ด๋ ์ญ์์ผ๋ก ๋์ด

}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  let arr = array.slice(0, 2)
  console.log(arr);
  //splice๋ ๋ฐฐ์ด ์์ฒด๋ฅผ ๋ณ๊ฒฝ์ํด
  //slice(start, end) ์ด๋ end๋ ๋ฐฐ์ ๋จ
  // ๋ฐฐ์ด์์ ์ํ๋ ๋ถ๋ถ๋ง return ํด์ ๋ฐ๊ณ  ์ถ์ ๊ฒฝ์ฐ slice ์ฌ์ฉํ๊ธฐ
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
  //find๋ ์ฝ๋ฐฑ ํจ์๋ฅผ ๋ง๋ค์ด return ํด์ผํจ
  //์ฒซ๋ฒ์งธ ๊ฐ์ ์ฐพ์๋ง์ ์ฐพ์์ง ๊ฐ์return
  //์ฐพ์ง ๋ชปํ๋ ๊ฒฝ์ฐ undefinded return
  //๋ฐฐ์ด์ ์๋ ๋ชจ๋  ์์๋ค๋ง๋ค ์ฝ๋ฐฑ๋์ด์ง
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
  //์ฝ๋ฐฑํจ์๋ก ์ ๋ฌ๋๋ ์ธ์์ ๋ณ์๋ช์ ์ต๋ํ ์ดํดํ๊ธฐ ์ฝ๋๋ก ์์ฑํ๋ ๊ฒ์ด ์ค์
}

// Q8. check if there is a student with the score lower than 50
{
  let result = students.some((student)=>student.score<50);
  console.log(result);
  //ํ๋๋ผ๋ ํน์  ์กฐ๊ฑด์ ๋ง์กฑํ๋ ๊ฒฝ์ฐ true ๋ฆฌํด
  let result2 = students.every((student)=>student.score<50);
  let result3 = !students.every((student)=>student.score<50);
  console.log(result2);
  console.log(result3);
  //๋ฐฐ์ด์ ๋ชจ๋  ๊ฐ๋ค์ด ์กฐ๊ฑด์ ๋ง์กฑํ๋ ๊ฒฝ์ฐ true ๋ฆฌํด
  //!๋ฅผ ๋ถ์ด๋ฉด false ๋ผ๋ฉด true๋ก true๋ผ๋ฉด false๋ก ๋ฆฌํด
}

// Q9. compute students' average score
{
  let result = students.reduce((prev, curr)=> prev + curr.score, 0); 
  console.log(result /students.length);
  //initial value ์ด๊ธฐ๊ฐ ์ค์ (prev)
  //๋ฐฐ์ด์ ์๋ ๋ชจ๋  ๊ฐ์ ๋์ , ๋ชจ์๋์ ๋ ์ฌ์ฉ
  //2๋ฒ์งธ ํธ์ถ๋ถํฐ๋ prev ๊ฐ์ด undefined
  //   -> return ๊ฐ์ ์์ด์ผํจ
  //๋ฐฐ์ด๊ฐ ํ๋ํ๋์ฉ curr์ ์ ๋ฌ๋จ ๋ค์ ๋จ๊ณ์์ curr -> prev

  //reduceRight์ ๋ฐฐ์ด์ ๋งจ ๋ง์ง๋ง ๊ฐ๋ถํฐ ์์
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
  //์ด์  ๊ฐ๊ณผ ํ์ฌ ๊ฐ ์ ๋ฌ
  // -๊ฐ์ ๋ฆฌํดํ๊ฒ ๋  ๊ฒฝ์ฐ ์ฒซ๋ฒ์งธ๊ฐ ๋๋ฒ์งธ๋ณด๋ค ์๋ค๊ณ  ๊ฐ์ฃผ๋จ
}