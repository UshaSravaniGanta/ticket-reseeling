import axios from 'axios';
const EVENTS_API = 'http://localhost:4000/api/events';


export const findEvents = async () => {
    console.log('services')
    const response = await axios.get(EVENTS_API);
    const events = response.data;
    return events;
}

export const createEvent = async (event) => {
    const response = await axios.post(EVENTS_API, event)
    return response.data;
}
