import { createSlice } from "@reduxjs/toolkit";

const songsSlice= createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state,action){
            state.push(action.payload);
        },
    }
})