import { Grid, Icon, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
      <Typography 
        variant="h1"
        sx={{
          textAlign:"center",
          color:"#fff",
          bgcolor:"primary.main",
          mb:10
        }}
      >
        Agenda App
        <StarIcon sx={{ fontSize: 100, color: "white"}}/>
      </Typography>

      <Typography 
        variant="h2"
        sx={{
          textAlign:"center",
          color:"#fff",
          bgcolor:"primary.main"
        }}
      >
        {title==="Login" ? "¡Bienvenido!" :  "¡Es un gusto conocerte!" }
      </Typography>
        <Grid item
          className="box-shadow"
          xs={ 3 }
          sx={{
            width: { sm: 450 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2
        }}
        >
            <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

            { children }
            
        </Grid>

    </Grid>
    )
}
