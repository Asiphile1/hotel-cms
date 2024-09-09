import React, { useState } from 'react';

const AddAccommodation = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to Firestore or your API
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Hotel Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={form.imageUrl}
        onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
      />
      <button type="submit">Add Accommodation</button>
    </form>
  );
};

export default AddAccommodation;
