import { SubmitHandler, useForm } from 'react-hook-form'
import './App.css'
import Input from './components/Input/Input'
import ErrorBadge from './components/ErrorBadge/ErrorBadge'
import { InputWrapper } from './AppStyles'

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
    formState: { errors }
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data)
  }
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          label='Name'
          htmlFor='name'
          type='text'
          {...register('name', { required: true })}
        />
        {errors.name && <ErrorBadge errorMessage='Name is required' />}
      </InputWrapper>
      <InputWrapper>
        <Input
          label='Email'
          htmlFor='email'
          type='email'
          {...register('email')}
        />
      </InputWrapper>
      <Input
        label='Password'
        htmlFor='pasword'
        type='password'
        {...register('password')}
      />
      <Input
        label='Confirm password'
        htmlFor='confirmPassword'
        type='password'
        {...register('confirmPassword')}
      />
      <Input label='Date' htmlFor='date' type='date' {...register('date')} />
      <label htmlFor='country'>Country</label>
      <select {...register('country')}>
        <option value='me'>Mexico</option>
        <option value='ar'>Argentina</option>
        <option value='us'>USA</option>
        <option value='ca'>Canada</option>
      </select>
      <Input
        label='Terms and conditions'
        htmlFor='terms'
        type='checkbox'
        {...register('terms')}
      />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
