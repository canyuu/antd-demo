import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';


export default configureStore({
  reducer,
  middleware: [thunk, logger],
  enhancers: {
    counter1: {number: 0},
    counter2: {number: 0},
    counter3: {number: 0},
  },
});
