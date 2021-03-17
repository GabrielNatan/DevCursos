import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styled'
import { RiAliensFill, RiUser2Fill, RiLogoutCircleFill,RiArrowRightCircleLine } from 'react-icons/ri'
import { BiBookBookmark } from 'react-icons/bi'

export default function Card(){

    const [open, setOpen] = useState(false)
    return(
        <Container open={open}>
            <RiArrowRightCircleLine className="open" color="orange" size="30px" onClick={()=>setOpen(!open)}/>
                <div className="logo">
                    <RiAliensFill color="orange" size="50px"/>
                </div>

                <nav>
                    <a href="#"><RiUser2Fill size={25}/> <strong> Meus Cursos</strong></a>       
                    <a href="#"><BiBookBookmark size={25}/> <strong> Cursos</strong></a>       
                    <a href="#"><RiUser2Fill size={25}/> <strong> Amigos</strong></a>       
                    <a href="#"><RiUser2Fill size={25}/> <strong> Meu Perfil</strong></a>       
                </nav>
                <div className="sair">
                    <RiLogoutCircleFill className="logout" color="#FFF" size={25} />
                </div>
        </Container>
    )
}