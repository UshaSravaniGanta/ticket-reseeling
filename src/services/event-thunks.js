import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./event-services.js"

console.log('Thunk')


export const findEventsThunk = createAsyncThunk(
    'events/findEvents', async () =>
        await service.findEvents()
)

export const createEventThunk = createAsyncThunk(
    'events/createEvents', async (event) =>
        await service.createEvent(event)
)