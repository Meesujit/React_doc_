import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodos = createAsyncThunk('fetchTodo', 
    async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return response.json();

})

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    // extraReducers is a function that takes a builder object as an argument. and listens to the action dispatched by the fetchTodos action creator.
    extraReducers: (builder) => {
        // Pending
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })

        // Fullfilled to get the payload
        builder.addCase(fetchTodos.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.data = action.payload;
        })

        // Rejected
        builder.addCase(fetchTodos.rejected, (state, action) =>{
            state.isError = true;
            console.log('Error:', action.payload);
        })
    }

})

export default todoSlice.reducer;
