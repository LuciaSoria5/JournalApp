import { Link as RouerLink} from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    // Grid es como un <div> pero con propiedades de Material
    <AuthLayout title="Login">

      <form>

        <Grid container>


          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder="correo@google.com" 
                  fullWidth
              />
          </Grid>


          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                  label="Contraseña" 
                  type="password" 
                  placeholder="Contraseña" 
                  fullWidth
              />
          </Grid>


          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2}}>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1}}>Google</Typography>
              </Button>
            </Grid>

          </Grid>


          <Grid container direction="row" justifyContent="end">

            <Link component={ RouerLink } color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>

          </Grid>  


        </Grid>

      </form>

    </AuthLayout>
  )
}
