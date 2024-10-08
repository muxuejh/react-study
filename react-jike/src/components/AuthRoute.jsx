import { getToken } from '@/utils'
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthRoute({ children }) {
  const token = getToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={'/login'} replace />
  }
}
