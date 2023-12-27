// src/redux/actions/counterActions.js

export const increment = (amount) => {
    return {
      type: 'INCREMENT',
      payload: amount
    };
  };
  
  export const decrement = (amount) => {
    return {
      type: 'DECREMENT',
      payload: amount
    };
  };
  
  export const reset = () => {
    return {
      type: 'RESET'
    };
  };
  