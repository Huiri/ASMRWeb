import React, { useCallback } from 'react';
import './TodoList.scss'
import TodoListItem from './TodoListItem';
import {List} from 'react-virtualized';
const TodoList = ({todos, onRemove, onToggle}) => {

    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return (
                <TodoListItem
                todo = {todo}
                key = {key}
                onRemove = {onRemove}
                onToggle = {onToggle}
                style = {style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );
    return (
        <List
        className='TodoList'
        width={512}
        height={513}
        rowCount = {todos.length}
        rowHeight = {57}
        rowRenderer = {rowRenderer}
        list = {todos}
        style = {{outline : 'none'}}
        />
        // <div className='TodoList'>
        //     {todos.map(todo =>(
        //         <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
        //     ))}
        //     {/* 여러 종류의 값을 전달해야 하는 경우 객체를 통째로 전달하는 편이 나중에 성능 최적화를 할 대 편리 */}
            
        // </div>
    );
};

export default React.memo(TodoList);