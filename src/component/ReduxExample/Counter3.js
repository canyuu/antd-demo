import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Counter3 = () => {
  const {number} = useSelector((state) => {
    return state.counter3;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Using useSelector, useDispatch</h3>
            Number:
      {number}
      <button onClick={() => dispatch({type: 'ADD3'})}>+</button>
      <button onClick={() => dispatch({type: 'MINUS3'})}>-</button>
    </div>
  );
};
export default Counter3;
