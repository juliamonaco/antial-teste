import React, { useEffect, useState } from 'react'
import * as S from './styled'
import axios from 'axios'
import { getStreamsInfo } from './service'
import { Link } from 'react-router-dom'
import Stream from './Streams'

const Dashboard = (params) => {

  const [lives, setLives] = useState([])

  const getInfos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_RTMP_HTTP}/api/streams`)
    const streams = response.data
    if (typeof (streams['live'] !== 'undefined')) {
      const res = await getStreamsInfo(streams['live']);
      setLives(res.data)
  }
        
  }

  useEffect(() => {
    getInfos()
  }, [])

  

  return(
    <S.Container>
      {lives && (
        lives.map(({streamKey, name, owner}, idx) => (
          <Stream key={idx} stream={streamKey} name={name} owner={owner} />
        ))
      )}
    </S.Container>
  )
}

export default Dashboard
