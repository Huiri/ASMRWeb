import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useState, useRef } from 'react';


function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++){
    array.push({
      id : i,
      text : `할 일 ${i}`,
      checked : false,
    });
  }
  return array;
}
// props로 전달해야할 함수를 만들 경우  컴포넌트의 성능을 아끼도록 useCallback을 사용해 감싸는 것을 습관화
const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id : 1, 
  //     text : '리액트의 기초 알아보기',
  //     checked : true,
  //   },
  //   {
  //     id : 2, 
  //     text : '컴포넌트 스타일링해보기',
  //     checked : true,
  //   },
  //   {
  //     id : 3, 
  //     text : '일정관리 앱 만들어보기',
  //     checked : false,
  //   },
  // ]);

  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);
  // id 값이 렌더링 되지 않기 때문에  ref 를 사용해 변수 생성

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos],
  );
  // map 함수를 이용해 id 값이 다른 경우 변화 X 처음 상태 반환
  // 변화가 필요한 원소만 업데이트됨
  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id? {...todo, checked : !todo.checked}:todo,
          // todos array에 map 함수를 이용해 새로운 배열 생성
          // ternary expression으로 표현,
          // todo.id parameter로 사용된 id와 같은 경우
          // checked 를 반대로 반환
          // todo.id가 parameter로 사용된 id와 다른 경우 그대로 반환
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle = {onToggle}/>
    </TodoTemplate>
  );
};

export default App;