import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    cityName: localStorage.getItem('cityName'),
    stateName: localStorage.getItem('stateName')
  },
  reducers: {
    updateLocation(state, action) {
      state.cityName = action.payload.city;
      state.stateName = action.payload.state;
      localStorage.setItem('cityName', action.payload);
      localStorage.setItem('stateName', action.payload);
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = locationSlice;
// Extract and export each action creator by name
export const { updateLocation } = actions;
// Export the reducer, either as a default or named export
export default reducer;
