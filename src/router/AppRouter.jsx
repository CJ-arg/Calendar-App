import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../auth'


export const AppRouter = () => {
  const authStatus = 'not-autenticated'
  return (
    <Routes>
      {

        // (authStatus === 'not-autenticated' )
        < Route path='/auth/*' element={<LoginPage />} />

      }

    </Routes>
  )
}

