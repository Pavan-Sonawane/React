const initialState = {
    data: [],
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
        return {
          ...state,
          data: action.payload,
        };
        case 'REMOVE_ALL_DATA':
            return {
                ...state,
                data: [], 
            };
        default:
            return state;
    }
  };
  
  export default dataReducer;
  