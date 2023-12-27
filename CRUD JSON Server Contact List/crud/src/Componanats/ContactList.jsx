
import React, { useEffect, useState } from 'react';
import {
  getContacts,
  deleteContact,
  searchContacts,
 
} from '../services/contactService';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddContactForm from '../Componanats/AddContact';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../Componanats/NavBar';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    refreshContacts();
  }, []);

  const refreshContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    refreshContacts();
  };

  const handleSearch = async () => {
    const data = await searchContacts(searchQuery);
    setContacts(data);
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
    setSelectedContact(null);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (contact) => {
    setSelectedContact(contact);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedContact(null);
  };

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleOpenAddModal={handleOpenAddModal}
      />
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {contacts.map((contact) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={contact.id}>
            <Card style={{ backgroundColor: '#f0f0f0', marginBottom: '10px' }}>
              <CardContent>
                <Typography variant="h6">
                  <strong>Name:</strong> {contact.name}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {contact.email}
                </Typography>
                <Typography>
                  <strong>Address:</strong> {contact.address}
                </Typography>
                <Typography>
                  <strong>Mobile Number:</strong> {contact.mobileNumber}
                </Typography>
                <Typography>
                  <strong>Country:</strong> {contact.country}
                </Typography>
                {contact.image && (
                  <img src={contact.image} alt="Contact" style={{ width: '100%', marginTop: '10px' }} />
                )}
                <IconButton color="primary" aria-label="edit contact" onClick={() => handleOpenEditModal(contact)}>
                  <EditIcon />
                </IconButton>
                <Button
                  variant="contained"
                  onClick={() => handleDelete(contact.id)}
                  style={{ marginTop: '10px', backgroundColor: '#ff3d00', color: '#fff' }}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Contact Dialog */}
      <Dialog open={isAddModalOpen} onClose={handleCloseAddModal}>
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          <AddContactForm handleClose={handleCloseAddModal} refreshContacts={refreshContacts} />
        </DialogContent>
      </Dialog>

      {/* Edit Contact Dialog */}
      <Dialog open={isEditModalOpen} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <AddContactForm contact={selectedContact} handleClose={handleCloseEditModal} refreshContacts={refreshContacts} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactList;
