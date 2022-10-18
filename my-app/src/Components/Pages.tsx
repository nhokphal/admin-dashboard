import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';


const Container = styled.div
`
display: flex;
`;


export const Pages = () => {
  return (
    <Container>
        <Sidebar/>
        <Navbar/>
    </Container>
  )
}
