import styled from 'styled-components'

export const Header = styled.div`
  margin-bottom: 50px;
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`

export const Form = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  padding: 25px;
  border-radius: 5px;
  max-width: 425px;
  width: 100%;
  flex-direction: column;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  color: ${props => props.theme.palette.primary.main};
`
export const Text = styled.p`
  text-align: right;
  color: ${props => props.theme.palette.primary.main};
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  border-radius: 35px;

  &:hover{
    opacity: 0.9;
    cursor: pointer;
  }

`

export const Bottom = styled.div`
  margin: 15px 0;
  p{
    color: ${props => props.theme.palette.primary.main};
    font-size: 12px;
    text-align: center;
  }

  span{
    font-weight: 800;
  }
`

export const Confirm = styled.p`
  font-size: 10px;
  color: ${props => props.theme.palette.primary.main};
  text-align: center;
`