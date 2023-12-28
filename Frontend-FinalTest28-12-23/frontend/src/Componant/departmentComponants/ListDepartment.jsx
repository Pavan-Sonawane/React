// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDepartments } from '../../action/DepartmentAction';
// import AddDepartment from './AddDepartmant';

// const ListDepartment = () => {
//   const dispatch = useDispatch();
//   const departments = useSelector((state) => state.departments.departments);

//   useEffect(() => {
//     dispatch(fetchDepartments());
//   }, [dispatch]);

//   return (
//     <div>
//       <AddDepartment/>
//       <h2>Department List</h2>
//       <ul>
//         {departments.map((department) => (
//           <li key={department.id}>
//             <strong>{department.name}</strong>
//             <ul>
//               {department.employees &&
//                 department.employees.map((employee) => (
//                   <li key={employee.id}>{employee.name}</li>
//                 ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListDepartment;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartments, updateDepartment, deleteDepartment } from '../../action/DepartmentAction';
import AddDepartment from './AddDepartmant';
import UpdateDepartment from './UpdateDepartment';

const ListDepartment = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const handleUpdateClick = (department) => {
    setSelectedDepartment(department);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteDepartment(id));
  };

  const handleUpdateDepartment = (updatedDepartment) => {
    if (selectedDepartment) {
      dispatch(updateDepartment(selectedDepartment.id, updatedDepartment));
      setSelectedDepartment(null);
    }
  };

  return (
    <div>
      <AddDepartment />
      <h2>Department List</h2>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>
            <strong>{department.name}</strong>
            <button onClick={() => handleUpdateClick(department)}>Update</button>
            <button onClick={() => handleDeleteClick(department.id)}>Delete</button>
            <ul>
              {department.employees &&
                department.employees.map((employee) => (
                  <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Render the UpdateDepartment component */}
      {selectedDepartment && (
        <UpdateDepartment
          department={selectedDepartment}
          onUpdateDepartment={handleUpdateDepartment}
          onCancel={() => setSelectedDepartment(null)}
        />
      )}
    </div>
  );
};

export default ListDepartment;
