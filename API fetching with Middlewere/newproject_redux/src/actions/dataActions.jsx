export const fetchData = (data) => {
    return {
      type: 'FETCH_DATA',
      payload: data,
    };
  };

export const removeAllData = () => {
    return {
        type: 'REMOVE_ALL_DATA',
    };
};

