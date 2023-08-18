import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'TodoAppRootReducer',
    initialState: {
        id: 4,
        todos: []
    },
    reducers: {
        appTodo: (state, action) => {
            state.todos.push({
                id: state.currentId++,
                text: action.payload.trim(),
                state: 'todo',
            })
        },
        changeToDo: (state, action) => {
            const item = state.todos.findIndex( (item) => item.id === action.payload.id);

        }
    }
})

export default appSlice.reducer;
export const { appTodo, changeToDo } = appSlice.actions;
