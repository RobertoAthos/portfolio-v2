import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid #1B2138;
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  li{
    font-size: 1.5rem;
    color:white;
  }
  #active{
    color:#7AC7E3;
  }
`;