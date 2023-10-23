import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, updateTodo } from "../store/reducers/todo";
import { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      id: "",
    },
  });
  const todoStore = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addTodo(values));
  };

  const onEdit = (values, ) => {
    dispatch(editTodo(values, ));
  };

  const onDelete = (values) => {
    dispatch(deleteTodo(values));
  };

  const onUpdate = (values) => {
    dispatch(updateTodo(values));
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div>
    <h2>Todo App</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="todoName"
        control={control}
        render={({ field }) => (
          <input {...field} type="text" placeholder="Enter todo" />
        )}
      />
      <button type="submit">Add</button>
    </form>
    <ul>
    {posts.map((post) => (
          <li key={post.id}>{post.id}
          <button onClick={() => onEdit(post, 'New Text')}>Edit</button>
          <button onClick={() => onDelete(post)}>Delete</button>
          <button onClick={() => onUpdate(post, 'New Text')}>Update</button>
        </li>
        
      ))}
    </ul>
    <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
  </div>
  );
};

export default Todo;