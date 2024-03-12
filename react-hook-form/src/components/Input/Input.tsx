import React from 'react'
import { Field, InputStyled, Label } from './InputStyles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  htmlFor: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, htmlFor, ...rest }, ref) => (
    <Field>
      <Label htmlFor={htmlFor}>{label}</Label>
      <InputStyled ref={ref} {...rest} />
    </Field>
  )
)

export default Input
