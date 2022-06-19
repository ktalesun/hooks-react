import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks/';
import '../03-examples/styles.css'


export const TodoApp = () => {

    const {todos, handleAddToDo, handleToggle, handleDelete, todosCount, pendingCountTodos} = useTodo();

    return (
        <div className = 'contenedor'>
            <h1 className = 'title'>TODO App ({todosCount}) - Pendientes ({pendingCountTodos})</h1>
            <hr className = 'w-full mt-4' />

            <section className = 'container flex gap-6'>

                <article className='todo-list grow'>
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete= {handleDelete} />
                </article>
                <article className='todo-form grow mt-4'>
                    <TodoAdd handleAddToDo={handleAddToDo} />    
                </article>

            </section>
            

        </div>
    )
}
