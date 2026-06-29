import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { clerkEnabled } from '../config'

const ClerkProtectedRoute = ({ children }) => {
    const { user } = useUser()

    return user ? children : <Navigate to='/' />
}

const ProtectedRoute = ({children}) => {
  if (!clerkEnabled) {
    return children
  }

  return <ClerkProtectedRoute>{children}</ClerkProtectedRoute>
}

export default ProtectedRoute
