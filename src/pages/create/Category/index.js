import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CategoryCreate () {

  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  }

  const [categories, setCategories] = useState([])
  const [values, setValues] = useState(initialValues)

  function setValue (key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange (event) {
    // const { getAttribute, value } = event.target
    //
    // setValue(
    //   getAttribute('name'),
    //   value,
    // )

    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    )
  }

  useEffect(() => {

    const URL = 'http://localhost:3001/categories'

    fetch(URL).then(async (response) => {
      const responseData = await response.json()
      setCategories([
        ...responseData,
      ])
    })

    // setTimeout(() => {
    //   setCategories([
    //     ...categories,
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
    // }, 5 * 1000)

  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit (event) {
        event.preventDefault()

        setCategories([
          ...categories,
          values,
        ])

        setValues(initialValues)
      }}>

        <FormField
          label="Nome" name="name" type="text" value={values.name}
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
      </form>

      {categories.length === 0 && (
        <div>Loading...</div>
      )}

      <ul>
        {categories.map((category) => {
            return (
              <li key={`${category.name}`}>{category.name}</li>
            )
          },
        )}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  )
}

export default CategoryCreate
