import { Link as RouerLink} from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

// { campo: [ funcion de validacion (correcta), mensaje de error] }
const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @.' ],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres.' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.' ]
};

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ]);

  const { 
          formState, displayName, email, password, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid,
        } = useForm( formData, formValidations );

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
    
    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
    // Grid es como un <div> pero con propiedades de Material
    <AuthLayout title="Crear cuenta">
      {/* <h1>FormValid: { isFormValid ? 'Valido' : 'Incorrecto' }</h1> */}

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
                  error= { !!displayNameValid && formSubmitted }
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
                  error= { !!emailValid && formSubmitted }
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
                  error= { !!passwordValid && formSubmitted }
                  helperText={ passwordValid }
              />
          </Grid>


          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2}}>
            
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '' : 'none' }
            >
                <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 }>
              <Button 
                disabled={ isCheckingAuthentication }
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
