import React from 'react'
import { Container } from './styled'
import { FaHtml5 } from 'react-icons/fa'

export default function Card(){
    return(
        <Container>
                <strong>HTML5 - Basico</strong>
                <span className="prof">Rodrigo manguinho</span>
                <div className="img">
                    <FaHtml5 size="100px" color="orange"/>
                </div>
                <div className="rodape">
                    <span>
                        Aulas: 22 
                        
                    </span>
                    <span>99%</span>
                </div>
        </Container>
    )
}