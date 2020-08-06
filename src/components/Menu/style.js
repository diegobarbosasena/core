import styled from 'styled-components'

export const LogoImage = styled.img`
  max-width: 120px;
   
  @media (max-width: 800px) {
    max-width: 105px;
  }
`

export const MenuWraper = styled.nav`
  width: 100%;
  height: 94px;
  position: fixed;
  
  top: 0;
  left: 0;
  right: 0;
  
  padding-left: 5%;
  padding-right: 5%;

  z-index: 100; 
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background: transparent linear-gradient(to bottom, rgba(0, 0, 0, .7) 10%, rgba(0, 0, 0, 0));
  
  @media(max-width: 800px) {
    height: 80px;
    justify-content: center;
  }
`
