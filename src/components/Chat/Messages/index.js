import React from 'react';
import * as S from './styled'

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';



const Messages = ({ messages, name }) => { 
  
  return (
  <S.Container>
    {messages.map((message, i) => <div key={i}><Message data={message} /></div>)}
  </S.Container>
)};

export default Messages;