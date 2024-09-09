export const bookHotel = (bookingDetails) => {
    return {
      type: 'BOOK_HOTEL',
      payload: bookingDetails,
    };
  };
  