import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Button, Card ,CardHeader,Avatar, CardContent, Box,Fade } from '@mui/material';
import { red } from '@mui/material/colors';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
function FormComponent() {
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const { control } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   <div>
   <Button variant="contained" onClick={handleOpen}>Click Me</Button>
   <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose} 
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Card >
            <center>
            <CardContent sx={{backgroundColor: 'white'}}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <LockOpenIcon/>
                  </Avatar>
                }
              
                title=<strong><h3>This is Signup Form</h3></strong>
                
              />
              <form >
              <Controller
                name="userId"
                control={control}
                render={({ field }) => <TextField {...field} label="User ID" variant="outlined" />}
                
              
              />
              
              <br/><br/>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField {...field} label="Email" variant="outlined" />}
              
              /><br /><br/>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField {...field} label="Password" type="password" variant="outlined" />}
              />
              <br/>
              <br/>
              <Controller
                name="Confirm Password"
                control={control}
                render={({ field }) => <TextField {...field} label="Confirm Password" variant="outlined" />}
              
              />
              <br/><br/>
              <Button variant="contained">Submit </Button>
            </form>
        </CardContent>
            </center>
    </Card> 
          </Box>
        </Fade>
      </Modal>
    
    </div>
  );
}

export default FormComponent;
