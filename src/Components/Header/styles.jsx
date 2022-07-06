import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid whitesmoke;
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  li{
    font-size: 1.5rem;
  }
  a{
    color:white;
  }
  a:hover{
    color:#0EE7B7;
    transition: 300ms;
  }
  #active{
    color:#0EE7B7;
  }
`;