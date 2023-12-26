import { FormEvent, useState } from 'react'
import * as S from './styles'

//import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <S.Formulario onSubmit={aoEnviarForm}>
      <S.Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <S.Botao type="submit">Pesquisar</S.Botao>
    </S.Formulario>
  )
}
export default FormVagas
