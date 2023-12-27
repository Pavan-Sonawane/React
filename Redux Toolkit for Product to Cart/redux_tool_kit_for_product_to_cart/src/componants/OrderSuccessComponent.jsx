import React from 'react';

const OrderSuccessComponent = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transform: 'translateY(-20px) scale(0.8)',
    animation: 'fade-in 0.5s ease-out forwards 0.5s, scale-up 0.3s ease-out forwards 0.5s',
    background: 'linear-gradient(45deg, #f06, #9f6)',
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
  };

  const iconStyle = {
    fontSize: '4rem',
    color: '#00c853',
    animation: 'bounce 0.5s ease-out forwards 0.5s',
  };

  const messageStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '10px',
    textAlign: 'center',
    transformOrigin: 'center',
    animation: 'scale-up 0.3s ease-out forwards 0.5s, glitter 1s infinite',
  };

  return (
    <div style={containerStyle}>
      <div style={iconStyle}>&#10003;</div>
      <div style={messageStyle}>Order Successfully Placed!</div>
    </div>
  );
};

export default OrderSuccessComponent;
