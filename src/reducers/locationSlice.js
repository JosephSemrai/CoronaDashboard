import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {},
  reducers: {
    updateLocation(state, action) {
      localStorage.setItem('locationInfo', JSON.stringify(action.payload));
      return action.payload;
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = locationSlice;
// Extract and export each action creator by name
export const { updateLocation } = actions;
// Export the reducer, either as a default or named export
export default reducer;
