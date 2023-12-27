import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enrollments: [],
};

const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState,
  reducers: {
    setEnrollments(state, action) {
      state.enrollments = action.payload;
    },
    addEnrollment(state, action) {
      state.enrollments.push(action.payload);
    },
    updateEnrollment(state, action) {
      const { id, ...updatedData } = action.payload;
      const enrollmentToUpdate = state.enrollments.find(enrollment => enrollment.id === id);
      if (enrollmentToUpdate) {
        Object.assign(enrollmentToUpdate, updatedData);
      }
    },
    removeEnrollment(state, action) {
      state.enrollments = state.enrollments.filter(enrollment => enrollment.id !== action.payload);
    },
  },
});

export const { setEnrollments, addEnrollment, updateEnrollment, removeEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
