// GuestListComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReservationComponent from './ReservationComponant'; 

const GuestListComponent = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get('https://localhost:44346/api/Guest');
        setGuests(response.data.$values);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching guests:', error);
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  const handleBookRoom = (guestId) => {
    setSelectedGuest(guestId);
  };

  return (
    <div>
      <h2>Guest List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Guest ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr key={guest.guestId}>
                  <td>{guest.guestId}</td>
                  <td>{guest.firstName}</td>
                  <td>{guest.lastName}</td>
                  <td>{guest.email}</td>
                  <td>{guest.phoneNumber}</td>
                  <td>
                    <button onClick={() => handleBookRoom(guest.guestId)}>
                      Book Room
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedGuest && <ReservationComponent guestId={selectedGuest} />}
        </>
      )}
    </div>
  );
};

export default GuestListComponent;
