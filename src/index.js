import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import VideoCreate from './pages/create/Video'
import CategoryCreate from './pages/create/Category'

const Page404 = () => (<div>Ocorreu um erro...</div>)

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/video/create" component={VideoCreate} exact/>
      <Route path="/category/create" component={CategoryCreate} exact/>
      <Route component={Page404}/>
    </Switch>
  </Router>,

  document.getElementById('root'),
)
