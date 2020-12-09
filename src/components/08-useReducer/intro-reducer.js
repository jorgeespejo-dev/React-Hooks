
const initialState = [{
    id:1,
    todo: 'Comprar',
    done: false
}];

const todoReducer = ( state = initialState, action ) =>{    
    
    if(action?.type === 'add'){
        return [ ...state, action.payload ]
    }

    return state;
}

let todos = todoReducer();


//añadir nuevo elemento
const newTodo = {
    id:2,
    todo: 'Realizar Codigo',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);


console.log(todos)