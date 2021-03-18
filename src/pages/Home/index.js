import React from 'react'

import { Container, Cont } from './styled'
import { useDispatch,useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Aside from '../../components/Aside'
import Card from '../../components/Card'
export default function HomeScreen(){

    const dispatch = useDispatch();
    const name = useSelector(state => state.clickState.newValue)

    return(
        <Container>
                <Aside/>
                <div className="flex">
                    <Navbar/>
                    <Cont>
                        <div className="title">
                            <strong>{name}</strong>
                        </div>
                        <div className="cards"> 
                            <Card/>
                            
                        </div>
                                
                   </Cont>
                </div>
        </Container>
    )
}