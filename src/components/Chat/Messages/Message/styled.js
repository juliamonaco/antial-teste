import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 10px 0;

  ${({ inverse }) => inverse && `
    flex-direction: row-reverse;
  `}

`

export const Avatar = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Image = teste.png`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background: #777;
`

export const Content = styled.div`
  display: flex;
  flex: 6;
  flex-direction: column;
`

export const Message = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  background: #fff;
  min-height: 50px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  ${({ inverse }) => inverse && `
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 15px;
  `}
`

export const Card = styled.div`
  padding: 20px;
  color: #fff;
  font-size: 14px;
  background: ${props => props.theme.palette.primary.main};

  svg{
    color: #fff;
    margin-right: 10px;
  }
`

export const Item = styled.div`
  margin: 5px 0%;
`
