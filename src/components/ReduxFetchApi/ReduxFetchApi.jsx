import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../../redux/slices/todoSlice'


const ReduxFetchApi = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    console.log('State:', state);

    if(state.todo.isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
        {
            state.todo.data && state.todo.data.map((todo) => (
                <div className="" key={todo.id}>
                    <li>{todo.title}</li>
                </div>
            ))
        }
    </div>
  )
}

export default ReduxFetchApi