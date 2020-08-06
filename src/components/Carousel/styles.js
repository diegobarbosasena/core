import styled from 'styled-components'

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin: 0 5% 16px;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 1;
  padding: 16px 24px;
  display: inline-block;
  border-radius: 4px;
  margin-bottom: 16px;

  @media (max-width: 800px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`

export const Slider = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`
