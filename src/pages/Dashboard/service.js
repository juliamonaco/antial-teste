import api from '../../services/api'

export const getStreamsInfo = async (data) => {
  const response = await api.get('/info', {
    params: {
        streams: data
    }
  })

  return response
}