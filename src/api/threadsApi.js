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

export const threadIndex = user => {
  return axios({
    url: apiUrl + '/threads',
    method: 'GET'
  })
}

export const threadShow = (id, user) => {
  return axios({
    url: apiUrl + '/threads' + id
  })
}
