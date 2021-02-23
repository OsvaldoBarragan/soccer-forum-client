import React, { Component } from 'react'
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableContainer from '@material-ui/core/TableContainer'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'
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
          heading: 'Failed to Show Threads',
          message: 'An error has occured while loading threads. The error is: ' + error.message,
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
        {/* <Link to='/createComment'>Create a Comment</Link>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">User</TableCell>
                <TableCell align="right">Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                thread.comments.map((comments, index) => {
                  return <TableRow key={index}>
                    <TableCell align="right">{comments.owner}</TableCell>
                    <TableCell align="right">{comments.body}</TableCell>
                  </TableRow>
                })
              }
            </TableBody>
          </Table>
        </TableContainer> */}
      </div>
    )
  }
}

export default withRouter(ThreadShow)
