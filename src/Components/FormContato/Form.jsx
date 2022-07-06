import React,{useState,useRef} from 'react'
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';
import emailjs from '@emailjs/browser'


function Form() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const form = useRef();
  
    const [loading, setLoading] = useState(false);
  
    function handleSubmit(event) {
      event.preventDefault();
      if (!nome || !email || !mensagem) {
       alert('Preencha todos os campos para enviar sua mensagem!')
          }else{
            emailjs.sendForm('portfolio-gmail', 'portfolio', form.current, 'kc7ft4MqMDkvUdoFF')
            .then((result) => {
                alert("Mensagem Enviada Com Sucesso");
            }, (error) => {
                console.log(error.text);
            });
                }
              }
  return (
    <FormContainer ref={form} onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        name='user_name'
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        name='user_email'
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
        name='message'
      />
      <div className='send-btn'>
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
      </div>
    </FormContainer>
  )
}

export default Form