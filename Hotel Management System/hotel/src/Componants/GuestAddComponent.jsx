// GuestAddComponent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGuest } from '../actions/guestActions';

const GuestAddComponent = () => {
  const dispatch = useDispatch();

  const [newGuest, setNewGuest] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleAddGuest = () => {
    dispatch(addGuest(newGuest));
    // Clear the form after adding
    setNewGuest({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });
  };

  return (
    <div>
      <h2>Add Guest</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={newGuest.firstName}
            onChange={(e) => setNewGuest({ ...newGuest, firstName: e.target.value })}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={newGuest.lastName}
            onChange={(e) => setNewGuest({ ...newGuest, lastName: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={newGuest.email}
            onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={newGuest.phoneNumber}
            onChange={(e) => setNewGuest({ ...newGuest, phoneNumber: e.target.value })}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddGuest}>
          Add Guest
        </button>
      </form>
    </div>
  );
};

export default GuestAddComponent;
