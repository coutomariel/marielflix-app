import React from 'react'

import Logo from '../../assets/img/logo-main.png'
import './Menu.css'
// import ButtonLink from './components/ButtonLink'
import Button from '../Button'

export default function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="marielflix logo"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo video  
            </Button>

        </nav>
    )
}
