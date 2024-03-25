import { SubmitHandler, useForm } from 'react-hook-form'
import './App.css'
import Input from './components/Input/Input'
import ErrorBadge from './components/ErrorBadge/ErrorBadge'
import { InputFlex, InputWrapper } from './AppStyles'
import { useRef } from 'react'

type FormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
  date: string
  country: string
  terms: boolean
}
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      date: '',
      country: '',
      terms: false
    }
  })

  const password = useRef<string | null>(null)
  password.current = watch('password', '')

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    alert('Form submitted')
    reset()
    return data
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          label='Name'
          htmlFor='name'
          type='text'
          {...register('name', {
            required: { value: true, message: 'Name is required' },
            minLength: { value: 3, message: 'Name is too short' }
          })}
        />
        {errors?.name && <ErrorBadge errorMessage={errors?.name?.message} />}
      </InputWrapper>
      <InputWrapper>
        <Input
          label='Email'
          htmlFor='email'
          type='email'
          {...register('email', {
            required: { value: true, message: 'Mail is required' },
            pattern: {
              value:
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ as RegExp,
              message: 'Mail is not valid'
            }
          })}
        />
        {errors.email && <ErrorBadge errorMessage={errors?.email?.message} />}
      </InputWrapper>
      <InputWrapper>
        <Input
          label='Password'
          htmlFor='pasword'
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required'
            },
            minLength: {
              value: 6,
              message: 'Password is too short'
            }
          })}
        />
        {errors.password && (
          <ErrorBadge errorMessage={errors?.password?.message} />
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          label='Confirm password'
          htmlFor='confirmPassword'
          type='password'
          {...register('confirmPassword', {
            required: { value: true, message: 'Confirm password is required' },
            validate: value =>
              value === password.current || 'Passwords do not match'
          })}
        />
        {errors.confirmPassword && (
          <ErrorBadge errorMessage={errors?.confirmPassword?.message} />
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          label='Date'
          htmlFor='date'
          type='date'
          {...register('date', {
            required: {
              value: true,
              message: 'Date is required'
            },
            validate: value => {
              const bornDate = new Date(value)
              const actualDate = new Date()
              const age = actualDate.getFullYear() - bornDate.getFullYear()
              return age >= 18 || 'Must be at least 18 years old'
            }
          })}
        />
        {errors.date && <ErrorBadge errorMessage={errors?.date?.message} />}
      </InputWrapper>
      <InputWrapper>
        <label htmlFor='country'>Country</label>
        <select {...register('country')}>
          <option value='me'>Mexico</option>
          <option value='ar'>Argentina</option>
          <option value='us'>USA</option>
          <option value='ca'>Canada</option>
        </select>
      </InputWrapper>

      <InputFlex>
        <Input
          label='Terms and conditions'
          htmlFor='terms'
          type='checkbox'
          {...register('terms', {
            required: {
              value: true,
              message: 'Must accept terms and conditions'
            }
          })}
        />
        {errors.terms && <ErrorBadge errorMessage={errors?.terms?.message} />}
      </InputFlex>

      <button type='submit'>Submit</button>
      <div>
        <p>Form data</p>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </form>
  )
}

export default App
