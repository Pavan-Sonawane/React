import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchEmployees,
  UpdateEmployee,
  deleteDepartment,
} from "../actions/employeeActions";

const EmployeeList = ({
  employees,
  fetchEmployees,
  UpdateEmployee,
  deleteDepartment,
}) => {
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const [employeeId, setEmployeeId] = useState("");
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleUpdateClick = (employee) => {
    setEmployeeId(employee.id);
    setNewName(employee.name);
    setNewAddress(employee.emp_Addr);
    setNewPhoto(employee.emp_Photo);
    setShowModal(true);
  };

  const handleUpdate = () => {
    if (
      employeeId &&
      (newName.trim() !== "" ||
        newAddress.trim() !== "" ||
        newPhoto.trim() !== "")
    ) {
      UpdateEmployee({
        id: employeeId,
        name: newName,
        emp_Addr: newAddress,
        emp_Photo: newPhoto,
      });
      setEmployeeId("");
      setNewName("");
      setNewAddress("");
      setNewPhoto("");
      setShowModal(false);
    }
  };

  const handleDelete = (id) => {
    deleteDepartment(id);
  };

  return (
    <div>
      <div className="container text-center">
        <div
          className="d-flex justify-content-between align-items-center mb-3 mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <h2 className="mb-0">
            <i className="fas fa-users mr-2"></i> Employee List
          </h2>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.emp_Addr}</td>
              <td><img src={employee.emp_Photo} alt="Employee Photo" /></td>


              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateClick(employee)}
                >
                  <i className="fa fa-pencil"></i> Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Employee</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="newName">New Name:</label>
                  <input
                    type="text"
                    id="newName"
                    className="form-control"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newAddress">New Address:</label>
                  <input
                    type="text"
                    id="newAddress"
                    className="form-control"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPhoto">New Photo:</label>
                  <input
                    type="text"
                    id="newPhoto"
                    className="form-control"
                    value={newPhoto}
                    onChange={(e) => setNewPhoto(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  Update Employee
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    UpdateEmployee: (employeeData) => dispatch(UpdateEmployee(employeeData)),
    deleteDepartment: (id) => dispatch(deleteDepartment(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
