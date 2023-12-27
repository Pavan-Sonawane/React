// // src/services/contactService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:3001';

// export const getContacts = async () => {
//   const response = await axios.get(`${API_URL}/contacts`);
//   return response.data;
// };

// export const addContact = async (contact) => {
//   const response = await axios.post(`${API_URL}/contacts`, contact);
//   return response.data;
// };

// export const updateContact = async (id, contact) => {
//   const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
//   return response.data;
// };

// export const deleteContact = async (id) => {
//   const response = await axios.delete(`${API_URL}/contacts/${id}`);
//   return response.data;
// };

// // export const searchContacts = async (query) => {
// //   const response = await axios.get(`${API_URL}/contacts?q=${query}`);
// //   return response.data;
// // };
// export const searchContacts = async (query) => {
//     const response = await axios.get(`${API_URL}/contacts`);
//     const contacts = response.data;
  
//     // Perform a case-insensitive search
//     const filteredContacts = contacts.filter((contact) => {
//       const name = contact.name.toLowerCase();
//       const email = contact.email.toLowerCase();
//       const address = contact.address.toLowerCase();
  
//       const lowercaseQuery = query.toLowerCase();
  
//       return name.includes(lowercaseQuery) || email.includes(lowercaseQuery) || address.includes(lowercaseQuery);
//     });
  
//     return filteredContacts;
//   };
  // src/services/contactService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getContacts = async () => {
  const response = await axios.get(`${API_URL}/contacts`);
  return response.data;
};

export const addContact = async (contact) => {
  const response = await axios.post(`${API_URL}/contacts`, contact);
  return response.data;
};

export const updateContact = async (id, contact) => {
  const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
  return response.data;
};

export const deleteContact = async (id) => {
  const response = await axios.delete(`${API_URL}/contacts/${id}`);
  return response.data;
};

export const searchContacts = async (query) => {
  const response = await axios.get(`${API_URL}/contacts`);
  const contacts = response.data;

  // Perform a case-insensitive search
  const filteredContacts = contacts.filter((contact) => {
    const name = contact.name.toLowerCase();
    const email = contact.email.toLowerCase();
    const address = contact.address.toLowerCase();

    const lowercaseQuery = query.toLowerCase();

    return name.includes(lowercaseQuery) || email.includes(lowercaseQuery) || address.includes(lowercaseQuery);
  });

  return filteredContacts;
};

// Update your uploadImage function
export const uploadImage = async (formData) => {
  try {
    const response = await axios.post(`http://localhost:3001/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Image uploaded successfully', response.data);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

