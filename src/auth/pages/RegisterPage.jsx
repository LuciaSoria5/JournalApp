import { Link as RouerLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'luci@google.com',
  password: '123456',
  displayName: 'Lucia Soria'
};

// { campo: [ funcion de validacion (correcta), mensaje de error] }
const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @.' ],
  password: [ (value) => value.length >= 6, 'El password debe tener al menos 6 caracteres.' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.' ]
};

export const RegisterPage = () => {

  const { 
          formState, displayName, email, password, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid,
        } = useForm( formData, formValidations );

  console.log( displayNameValid )

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    // Grid es como un <div> pero con propiedades de Material
    <AuthLayout title="Crear cuenta">

      <form onSubmit={ onSubmit }>

        <Grid container>

        <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                  label="Nombre Completo" 
                  type="text" 
                  placeholder="Nombre completo" 
                  fullWidth
                  name="displayName"
                  value={ displayName }
                  onChange={ onInputChange }
                  error= { !displayNameValid }
                  helperText={ displayNameValid }
              />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder="correo@google.com" 
                  fullWidth
                  name="email"
                  value={ email }
                  onChange={ onInputChange }
                  error= { !emailValid }
                  helperText={ emailValid }
              />
          </Grid>


          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                  label="Contraseña" 
                  type="password" 
                  placeholder="Contraseña" 
                  fullWidth
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                  error= { !passwordValid }
                  helperText={ passwordValid }
              />
          </Grid>


          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2}}>

            <Grid item xs={ 12 }>
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>

          </Grid>


          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouerLink } color="inherit" to="/auth/login">
              Ingresar
            </Link>

          </Grid>  


        </Grid>

      </form>

    </AuthLayout>
  )
}
