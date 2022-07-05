import React,{useState} from 'react'
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

function Form() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
  
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
        return;
      }
    }
  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  )
}

export default Form