
import { createSlice } from '@reduxjs/toolkit';
import { Alert, ImageProps } from 'react-native';


const initialState = {
  trips: [ {
    description: "Also known as Mamallapuram by locals, Mahabalipuram Beach is 58 km from Chennai city in Tamil Nadu. The beach lies on the shore of the Bay of Bengal and comprises some rock-cut sculptures. The scintillating beach has golden sand all along the stretch and is also famous for caves, massive rathas, chariots and temple",
    endDate: "26-11-2023",
    event: "Marina Beach",
    id: "1700980910167",
  //  image: Images.tripSample,
    location: "Marina Beach",
    startDate: "26-11-2023"
  },
  {
    description: "Also known as Mamallapuram by locals, Mahabalipuram Beach is 58 km from Chennai city in Tamil Nadu. The beach lies on the shore of the Bay of Bengal and comprises some rock-cut sculptures. The scintillating beach has golden sand all along the stretch and is also famous for caves, massive rathas, chariots and temple",
    endDate: "26-11-2023",
    event: "Mahabalipuram",
    id: "1700981079736",
   // image: Images.tripSample,
    location: "Mamallapuram",
    startDate: "26-11-2023"
  },
  {
    description: "Also known as Mamallapuram by locals, Mahabalipuram Beach is 58 km from Chennai city in Tamil Nadu. The beach lies on the shore of the Bay of Bengal and comprises some rock-cut sculptures. The scintillating beach has golden sand all along the stretch and is also famous for caves, massive rathas, chariots and temple",
    endDate: "26-11-2023",
    event: "Mamallapuram",
    id: "1700981191541",
   // image: Images.tripSample,
    location: "Mamallapuram",
    startDate: "26-11-2023"
  }],
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    editTrip: (state, action) => {
      const index = state.trips.findIndex((trip) => trip.id === action.payload.id);
      if (index !== -1) {
        state.trips[index] = action.payload;
      } else {
        console.log('error')
      }
    },
  },
});



export default tripSlice.reducer;
