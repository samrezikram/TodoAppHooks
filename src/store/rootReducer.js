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
              id: state.id++,
              text: action.payload.trim(),
              state: 'todo',
            });
          },
        changeTodo: (state, action) => {
            const item = state.todos.findIndex(item => item.id === Number(action.payload));
            if (item !== -1) {
                console.log(state.todos[item] ?? [].state  ?? '')
                state.todos[item].state = state.todos[item].state === 'todo' ? 'done' : 'todo';
                state.todos.push(state.todos.splice(item, 1)[0]);
            }

        },
        trashTodo: (state, action) => {
            const item = state.todos.findIndex((item) => item.id === action.payload);
            
            if (item !== -1) {
              state.todos.splice(item, 1);
            }
          },
    }
})

export default appSlice.reducer;
export const { appTodo, changeTodo, trashTodo } = appSlice.actions;
