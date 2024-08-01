import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CheckingAuth } from '../ui/'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth'

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    // se ejecuta cuando la autenticación cambia
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if ( !user ) return dispatch( logout() );

      const { uid, email, displayName, photoURL } = user;
      dispatch( login({ uid, email, displayName, photoURL }) )
    } )
  }, [])

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        // Protección de rutas:
        (status === 'authenticated')
        ? <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path='/*' element={ <Navigate to='/auth/login' /> } />

        {/* <Route path="auth/*" element={ <AuthRoutes /> } />
        <Route path="/*" element={ <JournalRoutes /> } /> */}

    </Routes>
  )
}
