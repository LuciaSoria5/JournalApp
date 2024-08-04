import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views/"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNode } from "../../store/journal/"

export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNode() );
  }

  return (
    <JournalLayout>
      
      {
        (!!active) // para que sea un booleano y no un objeto
        ? <NoteView />
        : <NothingSelectedView />
      }

      <IconButton
        onClick={ onClickNewNote }
        disabled={ isSaving }
        size="large"
        sx={{
          color:"white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9},
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
  )
}
