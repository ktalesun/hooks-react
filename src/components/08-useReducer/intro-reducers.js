
/**
 * Este es el estado inicial del reducer:
 * En este caso corresponde a un arreglo de objetos
 */
const initialState = [
    {
        id: 1,
        todo: 'Comprar café',
        done: false
    }
];


/**
 * Esta función corresponde al reducer, como todo reducer recibe el estado inicial
 * y la acción que este puede resolver
 * @param {*} state | Corresponde al estado inicial, en este caso es un arreglo de objetos.
 * @param {*} action | Corresponde a la acción que va a modificar el state que el reducer puede ejecutar, de momento solo puede agregar elementos al state
 *                     esto viene a través del objeto 'agregarTodoAction' y su propiedad de payLoad validado através de su atributo type.
 * @returns | Como todo reducer este retorna el estado.
 */
const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }


    return state;
}


/**
 * Este es el nuevo elemento a agregar al state
 */
const newTodo = {
    id: 2,
    todo: 'Comprar pan',
    done: false
}

/**
 * Esta es la acción que se le va a pasar como segundo parámetro al reducer, 
 * como se muestra a continuación es un objeto literal que tiene el atributo type con la acción realizar y
 * el atributo payload que corresponde al nuevo elemento agregar al arreglo de objetos(state)
 */
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}


const todo = todoReducer(initialState, agregarTodoAction);

console.log(todo);

