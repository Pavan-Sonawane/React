
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllData, removeAllDataThunk } from '../thunks/dataThunk';

const DataComponent = () => {
    const data = useSelector(state => state.fetch.data);
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(fetchAllData());
    }

    const handleRemoveAllData = () => {
        dispatch(removeAllDataThunk());
    }

    console.log('Data prop:', data); 

    return (
        <div>
            <button onClick={fetchData}>Show Data</button>
            <button onClick={handleRemoveAllData}>Remove All Data</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataComponent;
