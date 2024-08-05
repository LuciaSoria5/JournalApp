import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: { 
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: [], // http://foto1.jpg, http://foto2.jpg, etc
        // }
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload ); // en el payload esta nuestra nota
            state.isSaving = false;
        },

        setActiveNote: ( state, action ) => {
            state.active = action.payload;
        },

        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },

        setSaving: ( state ) => {
            state.isSaving = true;
            // todo: mensaje de error
        },

        updateNote: ( state, action ) => { // payload: nota actualizada
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;
         } )
        },
        
        deleteNoteById: ( state, action ) => {

        },
    }
});

export const { 
                savingNewNote,
                addNewEmptyNote, 
                setActiveNote, 
                setNotes, 
                setSaving, 
                updateNote, 
                deleteNoteById 
            } = journalSlice.actions;