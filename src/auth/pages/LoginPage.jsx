import { useDispatch } from 'react-redux';
import { Link as RouerLink} from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {

  const dispath = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'luci@google.com',
    password: '123456'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispath( checkingAuthentication(email, password));    
    // console.log({ email, password })
  }

  const onGoogleSigIn = () => {
    dispath( startGoogleSignIn() );
    // console.log( "on Google" )
  }

  return (
    // Grid es como un <div> pero con propiedades de Material
    <AuthLayout title="Login">

      <form onSubmit={ onSubmit }>

        <Grid container>


          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder="correo@google.com" 
                  fullWidth
                  name='email'
                  value={ email }
                  onChange={ onInputChange }
              />
          </Grid>


          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                  label="Contraseña" 
                  type="password" 
                  placeholder="Contraseña" 
                  fullWidth
                  name='password'
                  value={ password }
                  onChange={ onInputChange }
              />
          </Grid>


          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2}}>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                variant="contained" 
                fullWidth
                onClick={ onGoogleSigIn }
              >
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
