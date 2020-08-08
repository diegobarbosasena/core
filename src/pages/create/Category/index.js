import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'

function CategoryCreate () {

  const initialValues = {
    title: '',
    description: '',
    color: '#000000',
  }

  const { handleChange, values, clearForm } = useForm(initialValues)

  const [categories, setCategories] = useState([])

  useEffect(() => {

    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://core-imersao-react-alura.herokuapp.com/categories'

    fetch(URL).then(async (response) => {
      const responseData = await response.json()
      setCategories([
        ...responseData,
      ])
    })

    // setTimeout(() => {
    //   setCategories([
    //     ...categories,
    //
    //     {
    //       id: 6,
    //       title: 'Título',
    //       color: '#ff6a00',
    //       extra_link: {
    //         text: 'Canal no YouTube',
    //         url: 'https://youtube.com/c/DevSoutinho',
    //       },
    //     },
    //     {
    //       id: 1,
    //       name: 'Front End',
    //       description: 'Uma categoria muito boa',
    //       color: '#6BD1FF',
    //     },
    //     {
    //       id: 2,
    //       name: 'Back End',
    //       description: 'Outra categoria muito boa',
    //       color: '#6BD1FF',
    //     },
    //   ])
    // })

  }, [])

  return (
    <PageDefault paddingAll={'94px 5%'}>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit (event) {
        event.preventDefault()

        setCategories([
          ...categories,
          values,
        ], [])

        clearForm()
      }}>
        <>
          <FormField
            label="Título" name="title" type="text" value={values.title}
            onChange={handleChange}
          />

          <FormField
            label="Descrição" type="textarea" name="description"
            value={values.description}
            onChange={handleChange}
          />

          <FormField
            label="Cor" name="color" type="color" value={values.color}
            onChange={handleChange}
          />

          <Button background={'transparent'}>
            Cadastrar
          </Button>
        </>
      </form>

      {categories.length === 0 && (
        <div>Loading...</div>
      )}

      {
        categories.map((category) => {
            return (
              <ul key={`id_${category.title}`}>
                <li>{category.title}</li>
                {/*<li>{category.extra_link.text}</li>*/}
              </ul>
            )
          },
        )
      }
      <Link to="/">
        Home
      </Link>
    </PageDefault>
  )
}

export default CategoryCreate
