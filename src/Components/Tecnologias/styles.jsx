import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 9rem;
  .text-divisor{
    width: 100%;
    color:#0EE7B7 ;
    text-align: center;
    margin-top: 5rem;
  }

  > section {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    @media (max-width: 1000px) {
      gap: 5rem;
    }
    @media (max-width: 700px) {
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`;

export const TecnologiaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  p {
    color: #0EE7B7;
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: #7AC7E3;
    transition: 0.3s;
  }
  &:hover {
    svg {
      color: #0EE7B7;
      transform: scale(0.95);
    }
  }
  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }
    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;