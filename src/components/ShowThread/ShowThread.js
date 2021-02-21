import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { withRouter } from 'react-router-dom'
import { threadShow } from '../../api/threadsApi'

class ThreadShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      thread: null
    }
  }

  componentDidMount () {
    const { match, msgAlert } = this.props

    threadShow(match.params.id)
      .then(res => this.setState({ thread: res.data.thread }))
      .catch(error => {
        msgAlert({
          heading: 'The Thread has Failed to Show',
          message: 'An error has occured. The error is: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { thread } = this.state

    if (!thread) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    const formatDate = function (string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(string).toLocaleDateString([], options)
    }
    const threadDate = formatDate(thread.createdAt)
    return (
      <div>
        <h2>{thread.title}</h2>
        <h5>Created by: {thread.owner}</h5>
        <h6>{thread.category}</h6>
        <p>{thread.post}</p>
        <p>{threadDate}</p>
        <p>{thread.comment}</p>
      </div>
    )
  }
}

export default withRouter(ThreadShow)
