import apiUrl from '../apiConfig'
import axios from 'axios'

export const threadCreate = (user, threads) => {
  return axios({
    url: apiUrl + '/threads',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { threads }
  })
}

export const threadIndex = user => {
  return axios({
    url: apiUrl + '/threads',
    method: 'GET'
  })
}
