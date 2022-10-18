import { SearchOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div
`
flex: 6;
align-items: center;
display: flex;
justify-content: space-between;
`;

const Search = styled.div`
align-items: center;
display: flex   ;
`;


const Profile = styled.div
`
`;


// note: fixed bug styled Component need to npm i both typescript and npm i 

export const Navbar = () => {
  return (
    <Container>
        Navbar
        <Search>
            <input type="text" placeholder='Search...'/>
            <SearchOutlined/>
        </Search>
        <Profile>
            Profile
        </Profile>
    </Container>
  )
}
