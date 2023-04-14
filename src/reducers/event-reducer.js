import { createSlice } from "@reduxjs/toolkit";
import {findEventsThunk, createEventThunk}
    from "../services/event-thunks.js";

const initialState = {
    event: [],
    loading: false
}
const eventsSlice = createSlice({
                                   name: 'events',
                                   initialState,
                                   extraReducers: {
                                       [findEventsThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.tuits = []
                                           },
                                       [findEventsThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [findEventsThunk.rejected]:
                                           (state, action) => {
                                               state.loading = false
                                               state.error = action.error
                                           },
                                       [createEventThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits.push(payload)
                                           },
                                   },
                                   reducers: {
                                       createEvent(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       }
                                   }
                               });

export const {createEvent} = eventsSlice.actions;
export default eventsSlice.reducer;