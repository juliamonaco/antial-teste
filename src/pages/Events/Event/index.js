/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import * as S from './styled'
import io from "socket.io-client";
import { useSelector } from 'react-redux'
import Chat from '../../../components/Chat'
import ReactPlayer from 'react-player'
import Logo from '../../../assets/icons/logo-antial.svg'
import axios from 'axios'
import videojs from 'video.js'

const Event = ({ match }) => {

  const playerRef = useRef();

  const room = match.params.id
  const profile = useSelector(state => state.user.profile)
  const ENDPOINT = process.env.REACT_APP_API_URL

  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [stream, setStream] = useState(true)
  const [videoOptions, setVideoOptions] = useState(null)
  const socket = io(ENDPOINT);


  useEffect(() => {

    socket.emit('join', { profile, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message.trim) {
      socket.emit('sendMessage', {profile, message}, () => setMessage(''));
    }
  };

 
  return(
    <S.Container>
      <S.Player>
        <ReactPlayer style={{ background: "#f0f0f0", margin: 0, padding: 0}} width="100" url={`${process.env.REACT_APP_RTMP_HTTP}/live/${match.params.id}/index.m3u8`} playing />
      </S.Player>
      <Chat 
        messages={messages}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </S.Container>
  )
}

export default Event