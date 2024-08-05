import { loginWithEmailPassword, logoutFirebase, registerWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLoguot } from "../journal";
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = ( email, password) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );
        
        dispatch( login( result ) );
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );
        
        const { ok, uid, photoURL, errorMessage } = await registerWithEmailPassword({ email, password, displayName });
        if ( !ok ) return dispatch( logout ({errorMessage} ) );

        dispatch( login({ uid, displayName, email, photoURL }) );
    }
}

export const startLoignWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );
        const resp = await loginWithEmailPassword({ email, password });

        // console.log({uid, photoURL, errorMessage})
        if ( !resp.ok ) return dispatch( logout ( resp ) );

        dispatch( login(resp) );
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();
        
        dispatch( clearNotesLoguot() );
        dispatch( logout() );
    }
}