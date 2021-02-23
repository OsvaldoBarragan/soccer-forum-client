import apiUrl from '../apiConfig'
import axios from 'axios'

export const commentCreate = (user, threadId, comment) => {
  return axios({
    url: apiUrl + '/comments',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      comment: {
        body: comment.body,
        threadId: threadId
      }
    }
  })
}
