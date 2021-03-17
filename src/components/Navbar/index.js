import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Container } from './styled'

export default function Navbar(){
    return(
        <Container>
            <div className="search">
                <input type="text" placeholder="Pesquisar"></input><button><FaSearch/></button>    
            </div>    
            <div className="logoName">
                <strong>DevCuros</strong>
            </div>
        </Container>
    )
}