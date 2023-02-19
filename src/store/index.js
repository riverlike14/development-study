// "./store/index.js"
import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
	reducer: {
		cars: carsReducer,
		form: formReducer,
		songs: songsReducer,
		movies: moviesReducer
	}
});

export { store };
export { changeName, changeCost, addCar, removeCar, changeSearchTerm };
export { addSong, removeSong, addMovie, removeMovie, reset };
