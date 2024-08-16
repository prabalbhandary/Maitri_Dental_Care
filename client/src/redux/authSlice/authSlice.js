import { createSlice } from '@reduxjs/toolkit';

// Load state from localStorage if available
const loadAuthState = () => {
  const savedState = localStorage.getItem('authState');
  return savedState ? JSON.parse(savedState) : { isAuthenticated: false, username: '' };
};

const initialState = loadAuthState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      // Save state to localStorage
      localStorage.setItem('authState', JSON.stringify(state));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.username = '';
      // Remove state from localStorage
      localStorage.removeItem('authState');
    },
    // Other reducers...
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
