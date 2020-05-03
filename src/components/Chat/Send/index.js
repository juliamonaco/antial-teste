import React from 'react';
import * as S from './styled'
import Send from '../../../assets/icons/icon-send.svg'

const Input = ({ setMessage, sendMessage, message }) => (
  <S.Container className="S.Container">
    <S.Content>
    <S.Input
      type="text"
      placeholder="Digite uma mensagem..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <S.Button onClick={e => sendMessage(e)}><S.Icon src={Send} /></S.Button>
    </S.Content>
  </S.Container>
)

export default Input;