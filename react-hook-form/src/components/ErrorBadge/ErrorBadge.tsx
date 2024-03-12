import React from 'react'
import { ErrorBadgeStyled } from './ErrorBadgeStyles'

interface ErrorBadgeProps {
  errorMessage: string
}

const ErrorBadge: React.FC<ErrorBadgeProps> = ({ errorMessage }) => {
  return <ErrorBadgeStyled>{errorMessage}</ErrorBadgeStyled>
}

export default ErrorBadge
