import styled from 'styled-components'

export const VideoCardContainer = styled.a`
  height: 160px;
  width: 280px;
  display: flex;
  align-items: flex-end;
  
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  position: relative;
  padding: 16px;

  transition: opacity .3s;
  
  &:hover,
  &:focus {
    transform: scale(1.2);
    z-index: 200;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`
