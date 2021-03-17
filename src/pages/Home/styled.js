import styled from 'styled-components'


export const Container = styled.main`
    width:100%;
    background: #111;
    display: flex;
    


    .flex{
        width:100%;
        display:flex;
        flex-direction:column;
    }

    @media (min-width: 650px) {
        height:100vh;
        
      }
    
`

export const Cont = styled.div`
    
    width:100%;
    background:#111;
    padding:60px 0;
    display:flex;
    flex-direction:column;
    align-items:center;

    .title{
        color:#FFF;   
        margin-bottom:15px;
        
        strong{
            font-size:1.3rem;
        }
    }

    @media (min-width: 650px) {
        flex:1;
        flex-direction:row;
        flex-wrap:wrap;
        padding: 60px;
        justify-content:center;
        align-items:flex-start;
        overflow:auto;
        .title{
            width:100%;
            text-align:center;
            strong{
                font-size:1.9rem;
            }
        }
      }
`
