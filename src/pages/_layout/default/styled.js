import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 30px;
  min-height: 100vh;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`


export const Title = styled.h1`
  font-size: 14px;
  color: ${props => props.theme.palette.primary.main};
`

export const Icon = styled.img`
  width: 20px;

  @media(min-width: 768px){
    width: 15px;
  }
`

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  padding: 5px;
  border-radius: 5px;

  ${({ active }) => active && `
    background: #d8cfe2;
  `}

${({ disabled }) => disabled && `
    opacity: 0;
    cursor: inherit;
  `}
  
`
export const Main = styled.div`
  height: 100%;
  flex: 10;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`