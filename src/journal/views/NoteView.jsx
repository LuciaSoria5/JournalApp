import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote, startSaveNote } from "../../store/journal"

export const NoteView = () => {

    const { active:note } = useSelector( state => state.journal );
    const dispatch = useDispatch();
    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ])

    useEffect(() => {
      dispatch(setActiveNote( formState ));
    }, [ formState ])

    const onSetNote = () => {
        dispatch( startSaveNote() );
    }
    

  return (
    <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center"
        sx={{ mb: 1 }}
    >

        <Grid item>
            <Typography 
                fontSize={ 39 } 
                fontWeight="ligth"
                >
                    { dateString }
                </Typography>
        </Grid>

        <Grid item>
            <Button 
                onClick={ onSetNote }
                color="primary" 
                sx={{ padding: 2 }} 
            >
                <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un titulo"
                label="Titulo"
                sx={{ border: 'none', mb: 1}}
                name="title"
                value={  title }
                onChange={ onInputChange }
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                name="body"
                value={  body }
                onChange={ onInputChange }
            />
        </Grid>

        <ImageGallery />


    </Grid>
  )
}
