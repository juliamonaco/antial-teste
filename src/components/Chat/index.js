import React from 'react'
import * as S from './styled'
import Messages from './Messages'
import Send from './Send'

const Chat = ({ messages, message, setMessage, sendMessage }) => {
  return(
    <S.Container>
      <Messages messages={messages} />
      <Send message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </S.Container>
  )
}

export default Chat