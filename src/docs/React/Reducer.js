import React, {useReducer} from 'react';
import PropTypes from 'prop-types';

/*
补充文档 useReduce 和 useState 应用场景
https://zhuanlan.zhihu.com/p/69622832
* */
function init(initialCount = 0) {
  return {count: initialCount};
}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const Counter = ({initialCount}) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div>
      <p>
         Count: {state.count}
      </p>
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
            Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
};
Counter.propTypes = {
  initialCount: PropTypes.object,
};
export default Counter;
