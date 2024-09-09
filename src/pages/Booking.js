import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bookHotel } from '../actions/bookingActions';

const Booking = () => {
  const { id: hotelId } = useParams();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const dispatch = useDispatch();

  const handleBooking = () => {
    const bookingDetails = {
      hotelId,
      checkIn,
      checkOut,
      guests,
    };
    dispatch(bookHotel(bookingDetails));
  };

  return (
    <div>
      <h2>Book Hotel</h2>
      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default Booking;
