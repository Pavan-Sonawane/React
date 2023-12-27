
import React from 'react';
import { Button, TextField, Typography,InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = ({ searchQuery, setSearchQuery, handleSearch, handleOpenAddModal }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#2196F3', color: 'white' }}>
      <Typography variant="h2" style={{ marginBottom: '20px', fontFamily: 'Arial', fontWeight: 'bold' }}>
        Contact List
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginRight: '10px', backgroundColor: 'white', borderRadius: '5px', padding: '5px', color: 'black' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          style={{ backgroundColor: '#4CAF50', color: 'white', marginRight: '10px' }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenAddModal}
          style={{ backgroundColor: '#FF9800', color: 'white' }}
        >
          Add Contact
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
