const initialState = {
    count: 0
  };
  
  const counterReducer = (state = initialState, action) => {
    const payload = action.payload || 1;
  
    const actionHandlers = {
      'INCREMENT': { count: state.count + payload },
      'DECREMENT': { count: state.count - payload },
      'RESET': { count: 0 }
    };
  
    return actionHandlers[action.type] || state;
  };
  
  export default counterReducer;
  