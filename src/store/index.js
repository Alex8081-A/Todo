import { configureStore } from "@reduxjs/toolkit";
import todoRerucer from './todoSlice';

export default configureStore({
    reducer: {
        todos: todoRerucer,
    },
});