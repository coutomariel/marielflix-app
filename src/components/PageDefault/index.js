import React from 'react'
import Menu from '../menu/Menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color : var(--white);
    flex : 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-left: 5%;
`;

export default function PageDefault({ children }) {

    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}
