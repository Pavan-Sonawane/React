
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDepartments,
  deleteDepartment,
  updateDepartment,
  addDepartment,
} from "../actions/departmentActions";

const DepartmentList = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [departmentToDelete, setDepartmentToDelete] = useState(null);

  const handleDelete = (id) => {
    setDepartmentToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleUpdate = () => {
    if (editId && editName) {
      dispatch(updateDepartment({ id: editId, name: editName }));
      setEditId("");
      setEditName("");
      setIsModalOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      dispatch(addDepartment(formData));
      setFormData({ name: "" });
      setIsAddModalOpen(false);
    }
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
    setIsModalOpen(true);
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (departmentToDelete !== null) {
      dispatch(deleteDepartment(departmentToDelete));
      setIsDeleteModalOpen(false);
      setDepartmentToDelete(null);
    }
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={handleOpenAddModal}>
        <i className="fas fa-plus"></i> New Department
      </button>

      <div
        className={`modal ${isAddModalOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: isAddModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Department</h5>
              <button
                type="button"
                className="close"
                onClick={handleCloseAddModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Department Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-plus"></i> New Department
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h2>Department List</h2>
      <table className="table">
        <thead>
          <tr>
         
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              
              <td>{department.name}</td>
              <td>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(department.id)}
                >
                  <i className="fas fa-trash"></i> 
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(department.id, department.name)}
                >
                  <i className="fas fa-pen"></i> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className={`modal ${isModalOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Department</h5>
              <button
                type="button"
                className="close"
                onClick={handleCloseModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
              Name:{" "}
              <input
                type="text"
                className="form-control"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                <i className="fas fa-times"></i> Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                <i className="fas fa-check"></i> Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal ${isDeleteModalOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: isDeleteModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Deletion</h5>
              <button
                type="button"
                className="close"
                onClick={handleCloseModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this department?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                <i className="fas fa-times"></i> Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleConfirmDelete}
              >
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentList;
