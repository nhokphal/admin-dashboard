import React from 'react'
import styled from 'styled-components'

const Container = styled.div
`
background-color: red;
flex: 1;
`

const WrapperSideBar = styled.div`

justify-content: space-between;
flex-direction: row;

`;

const CardSideBar = styled.div
`

`;


const Sidebar = () => {
  return (
    <Container>
      
      <WrapperSideBar>
        sideBar
      </WrapperSideBar>
        <CardSideBar>
            Profile
        </CardSideBar>
    </Container>
  )
}

export default Sidebar
