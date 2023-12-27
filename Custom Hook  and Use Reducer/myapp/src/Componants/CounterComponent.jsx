import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return {
    count,
    increment,
    decrement
  };
}

function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <Card>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        This is Custom Hook.........
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Count: {count}
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddCircleOutline />}
        onClick={increment}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        startIcon={<RemoveCircleOutline />}
        onClick={decrement}
      >
        Decrement
      </Button>
    </CardContent>
  </Card>
  );
}

export default CounterComponent;
