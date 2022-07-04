import styled from 'styled-components';



export const MainContainer = styled.section`
        width: 100%;
        max-width: 1200px;
        margin: auto;
`

export const ContainerItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
`
export const ContainerText = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        transition: 0.5s;
      
    .text {
      position: absolute;
      top: 10rem;
      right: 17rem;
      transition: 0.5s;
      width: fit-content;
      h2 {
        color:#0EE7B7;
        font-size: 3rem;
        text-shadow: -4px 5px 22px #11172b53;
      }
      p {
        color: #7AC7E3;;
        font-size: 1.5rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b57;
      }
      .text::after{
        content: '.';
        width: 350px;
        height: 250px;
        border-radius: 100px;
        background-color: #11172b;
      }
    }
`
export const ContainerImg = styled.div`
    img{
        width: 900px;
        height:500px;
        object-fit: cover;
    }
    
`