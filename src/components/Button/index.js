import styled from 'styled-components'

const Button = styled.button`
  
  background: ${props => props.background || 'transparent'};
  color: ${props => props.color || 'var(--white)'};
  
  border: 1px solid var(--white);
  
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
  
  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
    outline: 0;
  }
`

export default Button
