

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getContacts, updateContact } from '../services/contactService';

const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    city: '',
    state: '',
    country: '',
    mobileNumber: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const contacts = await getContacts();
      const contact = contacts.find((c) => c.id === parseInt(id, 10));
      setFormData(contact);
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateContact(id, formData);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit">Update Contact</button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
