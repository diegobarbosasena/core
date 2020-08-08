import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`

function getAllWithVideos () {

  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {

    if (response.ok) return await response.json()

    // melhorar esse código de erro
    // pegar o erro que vem da API
    throw new Error('Ocorreu um erro')
  })
}

function getAll () {

  return fetch(`${URL_CATEGORIES}`).then(async (response) => {

    if (response.ok) return await response.json()

    // melhorar esse código de erro
    // pegar o erro que vem da API
    throw new Error('Ocorreu um erro')
  })
}

export default {
  getAllWithVideos,
  getAll,
}
