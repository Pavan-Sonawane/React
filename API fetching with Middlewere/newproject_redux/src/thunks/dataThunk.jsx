import { fetchData} from '../actions/dataActions';
export const fetchAllData = () => (dispatch) => {
    console.log('Fetching data...');
    fetch('https://dummyjson.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data); 
        dispatch(fetchData(data));
      })
      .catch((error) => console.error('Error:', error));
  };

  export const removeAllDataThunk = () => (dispatch) => {
    dispatch(removeAllData());
};

export const removeAllData = () => {
    return {
        type: 'REMOVE_ALL_DATA',
    };
};


