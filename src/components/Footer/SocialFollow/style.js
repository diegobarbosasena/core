import styled from 'styled-components'

export const Social = styled.div`
  
  background: #141414;
  padding: 25px 50px;
  
  @media(max-width: 800px) {
    padding: 25px 0;
  }

  a.social {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
  }

  a.social:hover {
    transform: scale(1.2);
  }
`
