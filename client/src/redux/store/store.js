import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../authSlice/authSlice';
import appointmentReducer from '../appointmentSlice/appointmentSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointment: appointmentReducer,
  },
});

export default store;
