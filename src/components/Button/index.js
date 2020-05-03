import React from 'react'
import * as S from './styled'

const Button = ({children, fullwidth, ...props}) => {
  return(
  <S.Container fullwidth={fullwidth} {...props}>{children}</S.Container>
  )
}
export default Button
