// src/components/Counter.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions/counterActions';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment(100))}>Increment By 100</button>
        <button onClick={() => dispatch(decrement(100))}>Decrement By 100</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
