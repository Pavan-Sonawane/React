
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProducts } from '../actions/reservationAction';

const ReservationComponent = ({ guestId }) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);

  const [newReservation, setNewReservation] = useState({
    guestId: guestId,
    roomNumber: '',
    checkInDate: '',
    checkOutDate: '',
    reservationDate: '',
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddReservation = () => {
    dispatch(addProduct(newReservation));
    setNewReservation({
      guestId: guestId,
      roomNumber: '',
      checkInDate: '',
      checkOutDate: '',
      reservationDate: '',
    });
  };
  const getRoomType = (roomNumber) => {
    const room = rooms.find((room) => room.roomNumber === roomNumber);
    console.log('Room:', room);
    return room ? room.roomType : 'N/A';
  };
  
  return (
    <div>
      <h2>Reservation for Guest ID {guestId}</h2>
      <form>
      <label>
        Room Number:
        <select
            value={newReservation.roomNumber}
            onChange={(e) =>
            setNewReservation({
                ...newReservation,
                roomNumber: e.target.value,
            })
            }
        >
            <option value="" disabled>
            Select Room
            </option>
            {rooms?.map((room) => (
            <option key={room.roomNumber} value={room.roomNumber}>
                {getRoomType(room.roomNumber)}
            </option>
            ))}
        </select>
        </label>
        <br />
        <label>
          Check-In Date:
          <input
            type="text"
            value={newReservation.checkInDate}
            onChange={(e) =>
              setNewReservation({
                ...newReservation,
                checkInDate: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Check-Out Date:
          <input
            type="text"
            value={newReservation.checkOutDate}
            onChange={(e) =>
              setNewReservation({
                ...newReservation,
                checkOutDate: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Reservation Date:
          <input
            type="text"
            value={newReservation.reservationDate}
            onChange={(e) =>
              setNewReservation({
                ...newReservation,
                reservationDate: e.target.value,
              })
            }
          />
        </label>
        <br />
        <button type="button" onClick={handleAddReservation}>
          Add Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationComponent;
