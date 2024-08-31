import { Box, IconButton, Toolbar, Tooltip } from "@mui/material"
import { NavBar, SideBar } from "../components/";
import { useEffect, useState } from "react";
import { KeyboardArrowLeftSharp, KeyboardArrowRightSharp } from "@mui/icons-material";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {

  const [open, setOpen] = useState(true);
  const [drawer, setDrawer] = useState(drawerWidth);

  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
      setDrawer( (open) ? drawerWidth : 0);
      // console.log(drawer)
  }, [open])

  return (
    <Box 
      sx={{ display: 'flex'}}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Tooltip title={ (open)? "Ocultar menú" : "Mostrar menú" } >
          <IconButton 
            onClick={ toggleDrawer(!open) } 
            sx={{
              position: 'absolute',
              top: "0.2%",
              left: 175,
              zIndex: 1300,
              
              // bottom: "75%"
            }}
          >
                {(open) 
                    ? <KeyboardArrowLeftSharp 
                        sx={{ 
                          fontSize: 35,
                          color: "white",
                          backgroundColor: "primary.main",
                          ":hover": { backgroundColor: "primary.main", opacity: 0.9},
                          borderRadius: "100%"
                        }}
                      /> 
                    : <KeyboardArrowRightSharp
                        sx={{ 
                          fontSize: 35,
                          color: "primary.main",
                          opacity: 0.5,
                          backgroundColor: "white",
                          ":hover": { backgroundColor: "white", opacity: 0.9},
                          borderRadius: "100%"
                        }}
                      /> 
                }
          </IconButton>
        </Tooltip>
        <NavBar drawerWidth= { drawer } />
        <SideBar drawerWidth={ drawer } open={ open } setOpen={ setOpen }/>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p:3}}
        >   
          <Toolbar />
          { children }

        </Box>

    </Box>
  )
}
