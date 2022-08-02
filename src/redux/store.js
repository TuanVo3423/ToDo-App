import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from '../components/Filters/ReducerSlice';
import { todoSlice } from '../components/TodoList/ReducerSlice';
const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer, // đáng ra chỗ này nó sẽ có 2 param là state và actions nhưng nó đã xử lí cho mình rồi
        todolist: todoSlice.reducer,
    },
});
export default store;
