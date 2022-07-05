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
       alert('Preencha todos os campos para enviar sua mensagem!', {
          style: {
            background: theme.error,
            color: '#fff'
          }
        });
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      }
    }
  return (
    <FormContainer ref={form} onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
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