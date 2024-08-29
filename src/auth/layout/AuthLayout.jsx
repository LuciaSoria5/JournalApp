import { Grid, Icon, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="top"
      height="100vh"
      width="100vw"
      bgcolor="primary.main"
      sx={{ minWidth: '360px', minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
      <Typography 
        variant="h3"
        sx={{
          textAlign:"center",
          color:"#fff",
          bgcolor:"primary.main",
          // mt:15,
          mb:2,
        }}
      >
        AgendApp
      </Typography>

      <Typography 
        variant="h5"
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
          xs={3} 
          // sm={6}
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
