// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, updateQuantity } from '../store/cartSlice';
// import { 
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box, 
//   Modal, Fade, FormControl, InputLabel, Select, MenuItem, styled, Typography, IconButton
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText('#007bff'),
//   backgroundColor: '#1437CA',
//   '&:hover': {
//     backgroundColor: '#0056b3',
//   },
// }));

// const ColorButtonn = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText('#007bff'),
//   backgroundColor: '#28B463 ',
//   '&:hover': {
//     backgroundColor: '#CB4335',
//   },
// }));

// const ColorfulText = styled('span')(({ theme }) => ({
//   color: 'Black',
// }));

// const ColorfulTextt = styled('span')(({ theme }) => ({
//   color: 'Red',
// }));

// const Cart = () => {
//   const cartItems = useSelector(state => state.cart);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (item) => {
//     dispatch(removeFromCart(item));
//   };

//   const [selectedItem, setSelectedItem] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleOpen = (item) => {
//     setSelectedItem(item);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleQuantityChange = (event) => {
//     const newQuantity = parseInt(event.target.value, 10);

//     setSelectedItem((prevSelectedItem) => ({
//       ...prevSelectedItem,
//       quantity: newQuantity
//     }));
//   };

//   const handleSaveQuantity = () => {
//     setOpen(false);

//     if (selectedItem) {
//       dispatch(updateQuantity({ id: selectedItem.id, quantity: selectedItem.quantity })); 
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
//   };

//   return (
//     <TableContainer>
//       <Table style={{ border: '1px solid #ccc', width:'70%', margin: '0 auto' }}>
//         <TableHead>
//           <TableRow>
//             <TableCell>
//               <Typography variant="h4" color="primary">Products</Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h4" color="primary">Price</Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h4" color="primary">Actions</Typography>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {cartItems.map(item => (
//             <TableRow key={item.id}>
//               <TableCell>
//                 <Typography variant='h6'>
//                   <ColorfulText>{item.title}</ColorfulText>
//                 </Typography>
//               </TableCell>
//               <TableCell>
//                 <Typography variant='h6'>
//                   <ColorfulText>${item.price}</ColorfulText>
//                 </Typography>
//               </TableCell>
//               <TableCell>
//                 <ColorButton variant="contained" onClick={() => handleOpen(item)}>
//                   Quantity: {item.quantity || 1}
//                 </ColorButton>
//                 <IconButton color="secondary" onClick={() => handleRemoveFromCart(item)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//           <TableRow>
//             <TableCell colSpan={2}>
//               <Typography variant='h6'>
//                 <ColorfulText></ColorfulText>
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant='h6'>
//                 <ColorfulTextt>Total Amount: ${calculateTotal()}</ColorfulTextt>
//               </Typography>
//             </TableCell>
//           </TableRow> 
//           <TableRow>
//             <TableCell colSpan={3} align="right">
//               <ColorButtonn variant="contained">
//                 <ShoppingCartIcon />
//                 <text>Checkout</text>
//               </ColorButtonn>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="quantity-modal-title"
//         aria-describedby="quantity-modal-description"
//       >
//         <Fade in={open} timeout={500}>
//           <Box sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             minWidth: 300,
//             textAlign: 'center',
//           }}>
//             <FormControl fullWidth variant="outlined">
//               <InputLabel id="quantity-label">Quantity</InputLabel>
//               <Select
//                 labelId="quantity-label"
//                 id="quantity"
//                 value={selectedItem ? (selectedItem.quantity || 1) : 1}
//                 label="Quantity"
//                 onChange={handleQuantityChange}
//               >
//                 {[...Array(5).keys()].map(i => (
//                   <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <Button variant="contained" color="primary" onClick={handleSaveQuantity}>
//               Save
//             </Button>
//           </Box>
//         </Fade>
//       </Modal>
//     </TableContainer>
//   );
// };

// export default Cart;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box, 
  Modal, Fade, FormControl, InputLabel, Select, MenuItem, styled, Typography, IconButton, Dialog, DialogTitle, DialogContent, TextField, Slide
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#007bff'),
  backgroundColor: '#1437CA',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
}));

const ColorButtonn = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#007bff'),
  backgroundColor: '#196F3D',
  '&:hover': {
    backgroundColor: '#CB4335',
  },
}));

const ColorfulText = styled('span')(({ theme }) => ({
  color: 'Black',
}));

const ColorfulTextt = styled('span')(({ theme }) => ({
  color: 'Red',
}));

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    setSelectedItem((prevSelectedItem) => ({
      ...prevSelectedItem,
      quantity: newQuantity
    }));
  };

  const handleSaveQuantity = () => {
    setOpen(false);

    if (selectedItem) {
      dispatch(updateQuantity({ id: selectedItem.id, quantity: selectedItem.quantity })); 
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const StyledButton = styled(Button)`
    margin-top: 16px;
  `;
  
  const OrderFormModal = ({ open, handleClose, handleFormSubmit }) => {
    const [formData, setFormData] = useState({
      name: '',
      address: '',
      email: '',
      pincode: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   handleFormSubmit(formData);
    //   handleClose();
    // };
    
    //handle my orders
    
    return (
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
        <DialogTitle>Checkout Information</DialogTitle>
        <DialogTitle>Your Checkout Amount is:${calculateTotal()} </DialogTitle>
        <DialogContent>
         <form>
            <TextField
              fullWidth
              label="Name"
              name="name"
             
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              margin="normal"
              required
            />
            <StyledButton type="submit" variant="contained" color="primary" >
             Place Order
            </StyledButton>
          </form>
        </DialogContent>
      </Dialog>
    );
  };

  // Initialize state for modal
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

 
 
  return (
    <TableContainer>
      <Table style={{ border: '1px solid #ccc', width:'70%', margin: '0 auto' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h4" color="primary">Products</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4" color="primary">Price</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h4" color="primary">Actions</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map(item => (
            <TableRow key={item.id}>
              <TableCell>
                <Typography variant='h6'>
                  <ColorfulText>{item.title}</ColorfulText>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6'>
                  <ColorfulText>${item.price}</ColorfulText>
                </Typography>
              </TableCell>
              <TableCell>
                <ColorButton variant="contained" onClick={() => handleOpen(item)}>
                  Quantity: {item.quantity || 1}
                </ColorButton>
                <IconButton style={{ color: 'red' }} onClick={() => handleRemoveFromCart(item)}>
                  <DeleteIcon />
                </IconButton>

              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant='h6'>
                <ColorfulText></ColorfulText>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6'>
                <ColorfulTextt>Total Amount: ${calculateTotal()}</ColorfulTextt>
              </Typography>
            </TableCell>
          </TableRow> 
          <TableRow>
            <TableCell colSpan={3} align="right">
              <ColorButtonn variant="contained" onClick={handleOpenModal}>
                <ShoppingCartIcon />
                <text>Checkout</text>
              </ColorButtonn>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="quantity-modal-title"
        aria-describedby="quantity-modal-description"
      >
        <Fade in={open} timeout={500}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            minWidth: 300,
            textAlign: 'center',
          }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="quantity-label">Quantity</InputLabel>
              <Select
                labelId="quantity-label"
                id="quantity"
                value={selectedItem ? (selectedItem.quantity || 1) : 1}
                label="Quantity"
                onChange={handleQuantityChange}
              >
                {[...Array(5).keys()].map(i => (
                  <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSaveQuantity}>
              Save
            </Button>

          </Box>
        </Fade>
      </Modal>
      <OrderFormModal open={modalOpen} handleClose={handleCloseModal}/>
    </TableContainer>
  );
};

export default Cart;
