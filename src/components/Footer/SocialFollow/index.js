import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import { Social } from './style'

export default function SocialFollow () {
  return (
    <Social className='social-container'>
      <a href='https://www.instagram.com/d1egobarbosasena/'
         className='instagram social' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size='2x'/>
      </a>

      <a href='https://github.com/diegobarbosasena'
         className='instagram social' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size='2x'/>
      </a>

      <a href='https://www.linkedin.com/in/diego-barbosa-sena-828770123/'
         className='instagram social' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
      </a>
    </Social>
  )
}
