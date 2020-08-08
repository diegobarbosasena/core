const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://core-imersao-react-alura.herokuapp.com'

export default {
  URL_BACKEND,
}
