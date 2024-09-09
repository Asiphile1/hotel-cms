import React from 'react';
import AddAccommodation from './AddAccommodation';
import EditAccommodation from './EditAccommodation';

const AdminPanel = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <AddAccommodation />
      <EditAccommodation hotelId={1} /> {/* Example: Replace with dynamic hotelId */}
    </div>
  );
};

export default AdminPanel;
