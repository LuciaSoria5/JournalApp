import { LogoutOutlined, MenuBookOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth";

export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <AppBar 
        position="fixed"
        sx={{
          width: {sm: `calc(100% - ${ drawerWidth }px)`},
          ml: { sm: `${ drawerWidth}px`}
        }}
    >
        <Toolbar>
            <Grid 
              container 
              direction="row" 
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography 
                variant="h6" 
                noWrap 
                component="div"
              >
                AgendApp
              </Typography>

              <IconButton 
                color="error"
                onClick={ onLogout}
              >
                <LogoutOutlined />
              </IconButton>

            </Grid>
        </Toolbar>

    </AppBar>
  )
}
