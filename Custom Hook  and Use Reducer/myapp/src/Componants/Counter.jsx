import React, { useReducer } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const initialState = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Card style={{ backgroundColor: state.count > 0 ? 'lightgreen' : 'lightcoral' }}>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        Use Reducer.......
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Count: {state.count}
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddCircleOutline />}
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        startIcon={<RemoveCircleOutline />}
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Decrement
      </Button>
    </CardContent>
  </Card>
  );
}

export default Counter;
