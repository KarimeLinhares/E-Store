import { createStore } from '@reduxjs/toolkit';
import rootReducers from './reducer';

const store = createStore(rootReducers);

export default store;