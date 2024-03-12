import { useState } from 'react'

type FormularioState = {
  name: string
  [key: string]: string
}

const useLogic = ({ name }: { name: string }) => {
  const [formulario, setFormulario] = useState<FormularioState>({ name })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }
  console.log(formulario)

  return { formulario, handleChange }
}

export default useLogic
