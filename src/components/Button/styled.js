import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  background-color: ${props => props.theme.palette.primary.main};
  color: #fff;
  height: 35px;
  border-radius: 35px;
  font-weight: 800;
  
  &:hover{
    opacity: 0.9;
  }

  ${({ fullwidth }) => fullwidth && `
    width: 100%;
  `}

`