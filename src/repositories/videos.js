import config from '../config'

const URL_VIDEOS = `${config.URL_BACKEND}/videos`

function create (videoObject) {

  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  }).then(async (response) => {

    if (response.ok) return await response.json()

    // melhorar esse código de erro
    // pegar o erro que vem da API
    throw new Error('Não foi possivel cadastrar os dados')
  })
}

export default {
  create,
}
