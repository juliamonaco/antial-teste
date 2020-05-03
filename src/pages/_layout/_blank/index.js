import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
`

const Blank = ({ children }) => {
  return(
    <Container>
      {children}
    </Container>
  )
}

export default Blank