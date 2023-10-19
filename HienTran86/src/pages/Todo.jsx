import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/reducers/todo";

const Todo = () => {
    const {control, handleSubmit} = useForm({
        defaultValues: {
            todoName: "",
        }
    })
const todoStore = useSelector(state => state.todo)
const dispatch = useDispatch()
    const onSubmit = (values) => {
       dispatch(addTodo(values));
    }
    return <div>
        <h2>Todo App</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller name="todoName" control = {control} render={({field}) =>(
                <input {...field} type="text" placeholder="Enter todo" />
            )}/>
            <button type="submit">add</button>
        </form>
        <ul>
            {todoStore.todos.map((todo, index)=> {
                return (
                    <li key={index}>{todo.todoName}</li>
                )
                    
                
            })}
        </ul>
    </div>
};

export default Todo;