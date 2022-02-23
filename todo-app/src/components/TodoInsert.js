import { MdAdd } from 'react-icons/md';
// import AddImg from 'C:/Users/gmlfl/JavaScript/todo-app/src/img/4879897_add_new_plus_icon.svg';
// import { ReactComponent as AddImg } from 'C:/Users/gmlfl/JavaScript/todo-app/src/img/4879897_add_new_plus_icon.svg';
import './TodoInsert.scss';
import { useState, useCallback } from 'react';

// 함수를 재사용하기 위함
const TodoInsert = ({onInsert}) => {


    // 인풋값을 추적하기 위한 값
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);
    // submit 데이터는 브라우저에서 새로고침 유발하므로 e.preventDefault로 방지
    // onsubmit 함수가 호출되면 oninsert 함수에 현재 value값을 파라미터로 넣어 호출, value값 초기화
    // onclick 이벤트로 대체 가능하지만 enter 키를 감지해 처리해주는 submit을 사용함

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요'
            value = {value}
            onChange={onChange}/>
            <button type='submit'>
                <MdAdd/>
                {/* <img src={AddImg}/> */}
                {/* <AddImg/> */}
            </button>
        </form>
    );
};

export default TodoInsert;