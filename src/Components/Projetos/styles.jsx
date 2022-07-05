import styled from 'styled-components';



export const MainContainer = styled.section`
        width: 100%;
        max-width: 1200px;
        margin: auto;
        .btn-project>button{
          background-color:#0EE7B7 ;
          color: white;
          padding: 15px;
          border-radius: 20px;
          width: 250px;
          font-size: 1.5rem;
          
        }
        .btn-project>button:hover{
          background-color:#7AC7E3 ;
          transition: 300ms;
        }
        .btn-project{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 3rem;
        }
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
      background: rgba( 255, 255, 255, 0.4 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 7.5px );
      -webkit-backdrop-filter: blur( 7.5px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      padding: 12px;
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
    }
`
export const ContainerImg = styled.div`
    img{
        width: 900px;
        height:500px;
        object-fit: cover;
    }
    
`