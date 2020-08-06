import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function VideoCreate () {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/category/create">
        Cadastro Categoria
      </Link>
    </PageDefault>
  )
}

export default VideoCreate
