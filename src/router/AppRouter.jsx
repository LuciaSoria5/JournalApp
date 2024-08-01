import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useSelector } from 'react-redux'
import { CheckingAuth } from '../ui/'

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );
  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>
        {/* login y registro */}
        <Route path="auth/*" element={ <AuthRoutes /> } />

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes /> } />

    </Routes>
  )
}
