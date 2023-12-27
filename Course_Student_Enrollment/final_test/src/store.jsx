
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './features/Student/studentSlice';
import courseReducer from './features/course/courseSlice';
import enrollmentReducer from './features/enrollment/enrollmentSlice';

const store = configureStore({
  reducer: {
    student: studentReducer,
    course: courseReducer,
    enrollment: enrollmentReducer,
  },
});

export default store;
