import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

/**
 *
 * reducer：是一个函数，返回下一个状态，接受两个参数：当前状态 和 触发的 action；
 *
 * preloadedState：初始状态对象，可以很随意指定，比如服务端渲染的初始状态
 * 但是如果使用 combineReducers 来生成 reducer，
 * 那必须保持状态对象的 key 和 combineReducers 中的 key 相对应；
 *
 * enhancer：是store 的增强器函数，可以指定为中间件，持久化等，
 * 但是这个函数只能用 Redux 提供的 applyMiddleware 函数来进行生成
 */
export default configureStore({
  reducer,
  middleware: [thunk, logger],
  enhancers: {
    counter1: {number: 0},
    counter2: {number: 0},
    counter3: {number: 0},
  },
});
