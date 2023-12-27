import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../actions/employeeActions'; // Import your action

const AddEmployee = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    emp_Addr: '',
    emp_Photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="emp_Addr"
          value={formData.emp_Addr}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Photo:</label>
        <input
          type="text"
          name="emp_Photo"
          value={formData.emp_Photo}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}; 

export default AddEmployee;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addEmployee } from '../actions/employeeActions';

// const AddEmployee = () => {
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     name: '',
//     emp_Addr: '',
//     emp_Photo: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, emp_Photo: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addEmployee(formData));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Address:</label>
//         <input
//           type="text"
//           name="emp_Addr"
//           value={formData.emp_Addr}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Photo:</label>
//         <input
//           type="file"
//           name="emp_Photo"
//           accept="image/*"
//           onChange={handleFileChange}
//         />
//       </div>
//       <button type="submit">Add Employee</button>
//     </form>
//   );
// };

// export default AddEmployee;
