import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import * as S from './styled'
import { Popover  } from '@material-ui/core'
import { FaUser, FaLinkedin } from 'react-icons/fa'

const Message = ({ data: { user, message} }) => {
  const[open, setOpen] = useState(false)
  let currentUser = false;

  console.log('Profile', user)

  const { name } = useSelector(state => state.user.profile)


  if (user.name.toLowerCase() === name.toLowerCase()) {
    currentUser = true;
  }

  return (
   <React.Fragment>
      <S.Container inverse={currentUser && true}>
      <S.Avatar>
        <S.Image onClick={() => setOpen(true)} />
      </S.Avatar>
      <S.Content>
        <S.Message inverse={currentUser && true}>
         {message}
        </S.Message>
      </S.Content>
    </S.Container>
    {open && (
      <Popover  
        open={open} 
        onClose={() => 
        setOpen(false)}
      >
        <S.Card>
          <S.Item>
            <FaUser />
            {user.name}
          </S.Item>
          <S.Item>
            <FaLinkedin />
            Linkedin
          </S.Item>
        </S.Card>
      </Popover >
    )}
   </React.Fragment>
  )
};

export default Message;
