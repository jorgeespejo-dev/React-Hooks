import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const handleAddTodo = (newTodo) =>{

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    useEffect(()=>{

        localStorage.setItem('todos', JSON.stringify(todos));
    
    }, [todos]);

    const handleDelete = (todoId) =>{
        
        //action
        const action = {
            type: 'delete',
            payload: todoId
        }

        //dispatch
        dispatch(action);
    }

    const handleToggle = (todoId) =>{
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }


    return (
        <div>
            <h1>TodoApp ({ todos.length }) </h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* TodoList, todos, handleToggle, handleDelete */}

                    <TodoList 
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />

                </div>
                <div className="col">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>

        </div>
    )
}
