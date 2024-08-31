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
            state.messageSaved = '';
        },

        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },

        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },

        updateNote: ( state, action ) => { // payload: nota actualizada
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;
            } );
            state.messageSaved = `${ action.payload.title }, actualizada correctamente.`;
        },

        setPhotosToActiveNote: ( state, action ) => {
            // console.log(action.payload)
            if ( state.active.imageUrls ) {
                state.active.imageUrls = [ ...action.payload, ...state.active.imageUrls ];
            } else {
                state.active.imageUrls = [ ...action.payload ];
            }
            state.isSaving = false;
        },

        clearNotesLoguot: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        
        deleteNoteById: ( state, action ) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
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
                setPhotosToActiveNote,
                clearNotesLoguot,
                deleteNoteById,
            } = journalSlice.actions;