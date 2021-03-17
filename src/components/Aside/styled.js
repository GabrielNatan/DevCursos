import styled from 'styled-components'
import {colorPrimary} from '../../global'
export const Container = styled.aside`
    width:700px;
    max-width:320px;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    background: ${colorPrimary};
    overflow:hidden;
    color:#FFF;

    .open{
        position:absolute;
        left:55px;
        top:20px;


    }

    nav{
        flex:1;
        width:100%;
        display:flex;
        flex-direction:column;
        overflow:hidden;
        padding:30px 0;

        a{
            padding:10px 12px;
            width:300px;
            text-decoration: none;
            color:#FFF;
            display:flex;
            align-items:center;
            border-radius:5px;
            overflow:hidden;

            strong{
                margin:0 15px;
            }
            :hover{
                background: #404040;
            }
        }
    }

    .sair{
        flex:1;
        width:100%;
        display:flex;
        justify-content:flex-end;
        align-items: flex-end;
        cursor:pointer;
    }

`