import styled from 'styled-components'

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  
  border-radius: 8px;
  
  @media (max-width: 800px) {
    display: none;
  }
`

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`
