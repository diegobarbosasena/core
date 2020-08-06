import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
  background-color: var(--grayDark);
  color: var(--white);
  flex: 1;
  padding: 94px 5%;
`

function PageDefault ({ children }) {
  return (
    <>
      <Menu/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </>
  )
}

export default PageDefault