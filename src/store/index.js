// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from 'src/reducers/index.js';

const store = configureStore({
    reducer
});

export default store;