import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://localhost:7018/api'; 

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudents(state, action) {
      state.students = action.payload;
    },
    addStudent(state, action) {
      state.students.push(action.payload);
    },
    updateStudent(state, action) {
      const { id, ...updatedData } = action.payload;
      const studentToUpdate = state.students.find(student => student.id === id);
      if (studentToUpdate) {
        Object.assign(studentToUpdate, updatedData);
      }
    },
    removeStudent(state, action) {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
  }, 
});

export const { setStudents, addStudent, updateStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;

export const fetchStudentsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/Student/GetAll`);
    dispatch(setStudents(response.data));
  } catch (error) {
    console.error('Error fetching students:', error);
  }
};

export const addStudentAsync = (studentData) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/Student/Insert `, studentData);
    dispatch(addStudent(response.data));
  } catch (error) {
    console.error('Error adding student:', error);
  }
};

export const updateStudentAsync = (studentData) => async (dispatch) => {
  console.log(studentData)
  try {
    const response = await axios.put(`${apiUrl}/Student/Update/${studentData.id}`, studentData);
    dispatch(updateStudent(response.data));
  } catch (error) {
    console.error('Error updating student:', error);
  }
};

export const deleteStudentAsync = (studentId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/Student/${studentId}`);
    dispatch(removeStudent(studentId));
  } catch (error) {
    console.error('Error deleting student:', error);
  }
};
