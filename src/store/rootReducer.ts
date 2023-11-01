import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { AppState } from '../models/todo.models';

const initialState: AppState = {
    id: 4,
    todos: [],
  };

const appSlice = createSlice({
    name: 'TodoAppRootReducer',
    initialState,
    reducers: {
        appTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
              id: state.id++,
              text: action.payload.trim(),
              state: 'todo',
            });
        },
        changeTodo: (state, action: PayloadAction<number>) => {
            const itemIndex = state.todos.findIndex((item) => item.id === action.payload);
      
            if (itemIndex !== -1) {
              state.todos[itemIndex].state = state.todos[itemIndex].state === 'todo' ? 'done' : 'todo';
      
              // Swap the item with the first item in the array
              const [removedItem] = state.todos.splice(itemIndex, 1);
              state.todos.push(removedItem);
            }
        },
        trashTodo: (state, action: PayloadAction<number>) => {
            const itemIndex = state.todos.findIndex((item) => item.id === action.payload);
      
            if (itemIndex !== -1) {
              state.todos.splice(itemIndex, 1);
            }
        },
    }
});

export default appSlice.reducer;
export const {appTodo, changeTodo, trashTodo} = appSlice.actions;
