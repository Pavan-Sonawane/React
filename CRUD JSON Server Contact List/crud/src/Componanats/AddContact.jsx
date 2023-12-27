
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addContact, updateContact, uploadImage } from '../services/contactService';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const AddContactForm = ({ contact, handleClose, refreshContacts }) => {
  const navigate = useNavigate();
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
    if (contact) {
      setFormData({
        name: contact.name || '',
        address: contact.address || '',
        email: contact.email || '',
        city: contact.city || '',
        state: contact.state || '',
        country: contact.country || '',
        mobileNumber: contact.mobileNumber || '',
        image: null,
      });
    }
  }, [contact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let contactId;
  
      if (contact) {
        await updateContact(contact.id, formData);
        contactId = contact.id;
      } else {
        const addedContact = await addContact(formData);
        contactId = addedContact.id;
      }
  
      if (formData.image) {
        const imageFormData = new FormData();
        console.log('Image Form Data:', imageFormData);

        imageFormData.append('postId', contactId); // Use the same key as in the server-side code
        imageFormData.append('image', formData.image);
  
        await uploadImage(imageFormData);
      }
  
      refreshContacts();
      handleClose();
    } catch (error) {
      console.error('Error:', error);
    }
};


  

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {contact ? 'Edit Contact' : 'Add Contact'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              name="city"
              variant="outlined"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="State"
              name="state"
              variant="outlined"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              variant="outlined"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              variant="outlined"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          {contact ? 'Update Contact' : 'Add Contact'}
        </Button>
      </form>
    </div>
  );
};

export default AddContactForm;
