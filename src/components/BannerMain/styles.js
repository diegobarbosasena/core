import styled from 'styled-components'

export const BannerMainContainer = styled.section`
  height: 80vh;
  color: var(--white);
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  position: relative;
  
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`

export const ContentAreaContainer = styled.section`
  margin: 0 5% 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
    
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`

ContentAreaContainer.Item = styled.div`
  width: 50%;
  margin-bottom: 50px;
  display: inline-block;
  
  @media (max-width: 800px) {
    width: 100%;
  }
`

ContentAreaContainer.Title = styled.h2`
  font-weight: 300;
  font-size: 40px;
  font-style: normal;
  line-height: 1;
  margin: 0 0 32px 0;

  @media (max-width: 800px) {
    font-size: 20px;
    margin: 32px 0 0 0;
    //text-align: center;
  }
`

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`

export const WatchButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  padding: 16px 24px;
  font-weight: bold;
  outline: none;
  border: 0;
  border-radius: 4px;
  color: var(--black);
  background: var(--white);
  font-size: 16px;
  margin: 0 auto;
  display: none;
  
  //box-sizing: border-box;
  //font-style: normal;
  //text-decoration: none;
  //transition: opacity .3s;
  
  @media (max-width: 800px) {
    display: block;
  }
`

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`

