import React, { useEffect, useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'
import videosRepository from '../../../repositories/videos'
import categoriesRepository from '../../../repositories/categories'

function VideoCreate () {

  const history = useHistory()
  const [categories, setCategories] = useState([])
  const categoryTitles = categories.map(({title}) => title)

  const { handleChange, values } = useForm({
    title: 'Video padrao',
    url: 'https://www.youtube.com/watch?v=MesxR4FtSSk',
    category: 'Front End',
  })

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer)
      })
  }, [])

  return (
    <PageDefault paddingAll={'90px 5%'}>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault()

        const selectedCategory = categories.find((category) => {
          return category.title === values.category
        })

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: selectedCategory.id,
        }).then(() => {

          // criar um pop-up se ocorrer tudo bem no cadastro
          // receber mensagem de sucesso do servidor
          // enviar a mensagem para a tela de redirecionamento

          console.log('cadastrou com sucesso')
          history.push('/')
        })

      }}>

        <FormField
          label="Título do vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/category/create">
        Cadastro Categoria
      </Link>
    </PageDefault>
  )
}

export default VideoCreate
