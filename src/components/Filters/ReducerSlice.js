import { createSlice } from '@reduxjs/toolkit';
export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        FilterByStatus: 'All',
        FilterByPriority: [],
    },
    reducers: {
        searchTextTodoList: (state, action) => {
            state.search = action.payload;
        },
        // không cần type của action để lọc , nó sẽ tự động trả về
        //  type = 'name của slice/ tên hàm tương ứng trong reducer
        // type = 'filters/searchTextTodoList'
        searchStatusTodoList: (state, action) => {
            state.FilterByStatus = action.payload;
        },
        searchPriorityTodoList: (state, action) => {
            state.FilterByPriority = action.payload;
        },
    },
});
