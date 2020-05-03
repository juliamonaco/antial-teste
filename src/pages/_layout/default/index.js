import React from 'react'
import * as S from './styled'
import Menu from '../../../assets/icons/icon-menu.svg'
import Notification from '../../../assets/icons/icon-notification.svg'
import Search from '../../../assets/icons/icon-search.svg'
import Back from '../../../assets/icons/icon-back.svg'
import Schedule from '../../../assets/icons/icon-schedule.svg'
import Profile from '../../../assets/icons/icon-profile.svg'
import history from '../../../services/history'

const Auth = ({ children, title, ...rest }) => {
  const { path } = rest

  const handlePush = url => {
    history.push(`${url}`)
  }

  return(
    <S.Container>
      <S.Header>
        <S.Button>
          <S.Icon src={Menu} />
        </S.Button>
        <S.Title>
          {title}
        </S.Title>
        <S.Button>
          <S.Icon src={Notification} />
        </S.Button>
      </S.Header>
      <S.Main>
        {children}
      </S.Main>
      <S.Menu>
          <S.Button disabled={path === "/" && true} onClick={() => handlePush("/")}>
            <S.Icon src={Back} />
          </S.Button>
        <S.Button onClick={() => handlePush("/procurar")} active={path === "/procurar" && true}>
          <S.Icon src={Search} />
        </S.Button>
        <S.Button onClick={() => handlePush("/calendario")}  active={path === "/calendario" && true}>
          <S.Icon src={Schedule} />
        </S.Button>
        <S.Button onClick={() => handlePush("/perfil")} active={path === "/perfil" && true}>
          <S.Icon src={Profile} />
        </S.Button>
      </S.Menu>
    </S.Container>
  )
}

export default Auth
