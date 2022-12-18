import { useState } from 'react'
import styles from '../styles/components/contato.module.css'

export function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
  
    function handleInputValueNome(event) {
      setNome(event.target.value)
    }
  
    function handleInputValueEmail(event) {
      setEmail(event.target.value)
    }
  
    function handleInputValueMensagem(event) {
      setMensagem(event.target.value)
    }
  
    function handleCreateMessage(event) {
      event.preventDefault()
      console.log(nome, email, mensagem)
    }
  
    return (
      <>
        <div className={styles.titleForm}>
            <h3 > Alguma sugestão ou dúvida ? Entre em contato comigo! </h3>
        </div>
          <form className={styles.form} onSubmit={handleCreateMessage}>
            <input
              className={styles.formInput}
              placeholder="Digite seu nome"
              onChange={handleInputValueNome}
            />
            <input
              className={styles.formInput}
              placeholder="Digite seu email"
              onChange={handleInputValueEmail}
            />
            <textarea
              className={styles.formTextArea}
              placeholder="Digite sua mensagem"
              onChange={handleInputValueMensagem}
            />
            <button type="submit" className={styles.formButton}>Enviar mensagem</button>
          </form>
       
      </>
    )
  }