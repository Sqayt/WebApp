import {createSlice} from '@reduxjs/toolkit';
import postPerson from "../../rest/person/postPerson";
import deletePerson from "../../rest/person/deletePerson";
import putPerson from "../../rest/person/putPerson";

const personSlice = createSlice({
    name: 'todoPerson',
    initialState: {
        todos: []
    },
    reducers: {
        createPerson(state, action) {
            postPerson(action.payload)
        },
        setPeople(state, action) {
            state.todos = action.payload
        },
        updatePerson(state, action) {
            putPerson(action.payload.id, action.payload)
        },
        removePerson(state, action) {
            deletePerson(action.payload)
        }
    },
});


export default personSlice.reducer;

export const {updatePerson, removePerson, createPerson, setPeople} = personSlice.actions;