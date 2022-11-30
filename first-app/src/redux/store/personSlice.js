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
        addPerson(state, action) {

        },
        createPerson(state, action) {
            postPerson(action.payload)
        },
        setPeople(state, action) {
            state.todos.push(action.payload)
        },
        removePerson(state, action) {
            deletePerson(action.payload)
        },
        updatePerson(state, action) {
            putPerson(action.payload.id, action.payload)
        }
    },
});

export default personSlice.reducer;

export const {addPerson, updatePerson, removePerson, createPerson, setPeople} = personSlice.actions;