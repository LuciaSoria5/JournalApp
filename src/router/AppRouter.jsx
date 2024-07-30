import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* login y registro */}
        <Route path="auth/*" element={ <AuthRoutes /> } />

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes /> } />

    </Routes>
  )
}
