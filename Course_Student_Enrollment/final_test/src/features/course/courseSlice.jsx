import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourses(state, action) {
      
      state.courses = action.payload;
    },
    addCourse(state, action) {
      state.courses.push(action.payload);
    },
    updateCourse(state, action) {
      const { id, ...updatedData } = action.payload;
      const courseToUpdate = state.courses.find(course => course.id === id);
      if (courseToUpdate) {
        Object.assign(courseToUpdate, updatedData);
      }
    },
    removeCourse(state, action) {
      state.courses = state.courses.filter(course => course.id !== action.payload);
    },
  },
});

export const { setCourses, addCourse, updateCourse, removeCourse } = courseSlice.actions;
export default courseSlice.reducer;
