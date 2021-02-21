import apiUrl from '../apiConfig'
import axios from 'axios'

export const threadCreate = (user, thread) => {
  return axios({
    url: apiUrl + '/threads',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { thread }
  })
}

export const threadIndex = () => {
  return axios({
    url: apiUrl + '/threads',
    method: 'GET'
  })
}

export const threadShow = id => {
  return axios({
    url: apiUrl + '/threads/' + id,
    method: 'GET'
  })
}
