import { KeyboardArrowLeftSharp, KeyboardArrowRightSharp, TurnedInNot } from "@mui/icons-material"
import StarIcon from '@mui/icons-material/Star';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, SwipeableDrawer, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240, open=true, toggleDrawer }) => {
    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

  return (
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <SwipeableDrawer
            variant="permanent" // podria ser temporary
            anchor="left"
            open={ open }
            onClose={ () => toggleDrawer(false) }
            onOpen={ () => toggleDrawer(true) }
            sx={{
                display: { xs: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth}
            }}
        >
            <Toolbar>
                <StarIcon sx={{ fontSize: 20, color: "primary.main"}}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                >
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider />
            
            <List>
                {
                    notes.map( ( note ) => (
                        <SideBarItem key={ note.id } { ...note }/>
                    ))
                }
            </List>

        </SwipeableDrawer>

    </Box>
  )
}
