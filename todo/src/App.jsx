import React, { useEffect } from 'react'
import classes from './styles.module.css'


import { useState } from 'react' ;
import TodoItem from './components/TodoItem';

const App = () => {

    const [loading, setLoading] = useState(false);
    const [todoList, setTodoList] = useState([])
    const [errorMsg, seterrorMsg] = useState(null);

    

    async function fetchlistOfTodos(){
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/todos")
            const data = await response.json();

            if(data?.todos && data?.todos?.length > 0){
                setTodoList(data?.todos)
                setLoading(false)
            }else{
                setTodoList([]);
                setLoading(false)
            seterrorMsg("")
            }

        } catch (error) {
            console.log(error);
            seterrorMsg("some error occurs")
        }
    }

    useEffect(() => {
        fetchlistOfTodos();
    },[])

  return (
    <div className={classes.mainwrapper} >
        <h1 className={classes.headertitle}>ToDo List</h1>
        <div className={classes.todolistWrapper} >
            {
            todoList && todoList.length > 0 ?
            todoList.map((todoItem, index) => <TodoItem key={index}  todoItem = {todoItem} />) :
            null
        }
        </div>
        </div>
  )
}

export default App
