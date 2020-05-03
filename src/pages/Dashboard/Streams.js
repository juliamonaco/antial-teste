import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core'
import Default from '../../assets/img/default.jpg'
import history from '../../services/history'

console.log(Default)

const Streams = ({ stream, name, owner, thumb}) => {
  return(
    <Card onClick={() => history.push(`/evento/${stream}`)}>
      <CardActionArea >
        <CardMedia
          style={{
            height: 200
          }}
          image={thumb || Default}
          title="Contemplative Reptile"
        >
          <CardContent>
          <span
            style={{
              padding: "5px 10px",
              background: "#E23838",
              color: "#fff",
            }}
          >Ao vivo</span>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  )
}

export default Streams