import { useState } from 'react'

function useForm (initialValues) {
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

  function clearForm () {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    clearForm,
  }
}

export default useForm
