import { createSlice } from '@reduxjs/toolkit';

import { addDocument, deleteDocument, updateDocument } from '../../firebase/services';
const initialState = [];
export const todoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        reset: () => initialState,
        initData: (state, action) => {
            action.payload.map((item) => state.push(item));
        },

        addTodolist: (state, action) => {
            state.push(action.payload);
            // cap nhat lai trong db
            addDocument('todos', {
                completed: action.payload.completed,
                name: action.payload.name,
                prioriry: action.payload.prioriry,
                uid: action.payload.uid,
            });
        },
        editCheckedTodo: (state, action) => {
            const currentTodo = state.find((todo) => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
            updateDocument('todos', currentTodo, action.payload);
        },
        deleteTodo: (state, action) => {
            state = state.filter((todo) => todo.id !== action.payload);
            deleteDocument('todos', action.payload);
        },
    },
});
