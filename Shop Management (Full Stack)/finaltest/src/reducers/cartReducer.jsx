

// import { actionTypes } from '../actions/cartActions';

// const initialState = {
//   cartItems: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_CART:
//       return {
//         ...state,
//         cartItems: action.payload,
//       };
//     case actionTypes.ADD_TO_CART:
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     case actionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item.id !== action.payload),
//       };
    
//     default:
//       return state;
//   }
// };


import { actionTypes } from '../actions/cartActions';

const initialState = {
  cartItems: [],
  searchResults: [],
  loading: false,
  error: null,
  currentCartId: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.productId !== action.payload),
        };
    
      case actionTypes.UPDATE_CART_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.cartId === action.payload.cartId ? action.payload : item
          ),
        };

        case actionTypes.SEARCH_CATEGORY_REQUEST:
          console.log('Searching for category with Cart ID:', action.payload); 

      return {
        ...state,
        loading: true,
        error: null,
        currentCartId: action.payload,
      };

    case actionTypes.SEARCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload,
      };

    case actionTypes.SEARCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
