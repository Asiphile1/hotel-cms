const initialState = {
    bookings: [],
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BOOK_HOTEL':
        return {
          ...state,
          bookings: [...state.bookings, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default bookingReducer;
  