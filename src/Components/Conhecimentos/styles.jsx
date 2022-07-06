import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: auto;

  section {
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid #A6A6A6;
    margin-bottom: 10rem;
    @media (max-width: 1000px) {
      gap: 1rem;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: linear-gradient(225deg, #313860 0%, #11172B 100%);
    border-radius: 8px;
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 19rem;
    transition: 0.5s;
    h2 {
      color: #0EE7B7;
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    p {
      color: white;
      font-size: 1rem;
      font-weight: 300;
    }
  }
  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }
  &:nth-child(even) > div {
    margin-top: 4rem;
  }
  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;
      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: auto;
      padding: 2rem;
      width: 100%;
      justify-content:center;
      align-items: center;
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;