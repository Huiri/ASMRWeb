import { MdAdd } from 'react-icons/md';
// import AddImg from 'C:/Users/gmlfl/JavaScript/todo-app/src/img/4879897_add_new_plus_icon.svg';
// import { ReactComponent as AddImg } from 'C:/Users/gmlfl/JavaScript/todo-app/src/img/4879897_add_new_plus_icon.svg';
import './TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);


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