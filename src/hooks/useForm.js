import { useEffect, useState } from 'react';

/* Parametros:
 { campo: inicializacion }
 { campo: [ funcion de validacion (correcta), mensaje de error] }
*/
export const useForm = ( initialForm = {}, formValidations = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    // cada vez que cambia el form state creamos los validators
    useEffect(() => {
      createValidators();
    }, [ formState ])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};

        // Rellenamos formCheckedValues con: campoValid: null (si es correcto) o campoValid: errorMessage (si no es correcto)
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage = 'Este campo es requerido.' ] = formValidations[formField];

        formCheckedValues[ `${ formField }Valid` ] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }

    return {
        ...formState,
        ...formValidation,
        formState,
        onInputChange,
        onResetForm,
    }
}