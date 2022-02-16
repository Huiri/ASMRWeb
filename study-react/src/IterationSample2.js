import { useState, useEffect } from "react";

function useSingleAndDoubleClick(actionSimpleClick, actionDoubleClick, delay = 250){
    const [click, setClick] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(click === 1) actionSimpleClick();
            setClick(0);
        }, delay);

        if(click === 2) actionDoubleClick();

        return() => clearTimeout(timer);
    }, [click]);

    return () => setClick(prev => prev + 1);
}
// const click = useSingleAndDoubleClick(callbackClick, callbackDoubleClick);

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text : '눈사람'},
        {id:2, text : '얼음'},
        {id:3, text : '눈'},
        {id:4, text : '바람'},

    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
      };
      const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
          {name.text}
        </li>
      ));
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
            {/* <button onClick={click}>clic</button> */}

        </>
    )
};
export default IterationSample;