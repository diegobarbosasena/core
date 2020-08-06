import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './style'
import { LogoImage, MenuWraper } from './style'
import Button from '../Button/'
import { Link } from 'react-router-dom'

function Menu () {
  return (
    <MenuWraper className="Menu">
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="??? Logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/video/create">
        Novo Vídeo
      </Button>
    </MenuWraper>
  )
}

export default Menu
