import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Spinner from 'react-bootstrap/Spinner'
import { threadIndex, threadDelete } from '../../api/threadsApi'

class ThreadIndex extends Component {
  constructor (props) {
    super(props)

    console.log('Constructor: ')
    console.log(props)
    this.state = {
      threads: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props
    threadIndex()
      .then(res => this.setState({ threads: res.data.threads }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Show Threads',
          message: 'An error has occured while loading threads. The error is: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = id => {
    const { user, msgAlert } = this.props

    console.log('Props for index: ')
    console.log(this.props)

    if (user) {
      threadDelete(id, user)
        .then(() => this.setState({ deleted: null }))
        .catch(error => {
          msgAlert({
            heading: 'Thread Deletion: Failed',
            message: 'You do not have permission to delete: ' + error.message,
            variant: 'danger'
          })
        })
    }
    if (!user) {
      threadDelete(id, user)
        .then(() => this.setState({ deleted: null }))
        .catch(error => {
          msgAlert({
            heading: 'Thread Deletion: Failed',
            message: 'You do not have an account: ' + error.message,
            variant: 'danger'
          })
        })
    }
  }

  render () {
    const { threads } = this.state

    if (!threads) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    return (
      <div>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Post</TableCell>
                <TableCell align="right">Creator</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right"># of Comments</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                threads.map((thread, index) => {
                  return <TableRow key={index}>
                    <TableCell align="right">
                      <Link to={`/category/${thread.category}/threads/${thread._id}`}>{thread.title}</Link>
                    </TableCell>
                    <TableCell align="right">{thread.post}</TableCell>
                    <TableCell align="right">{thread.owner}</TableCell>
                    <TableCell align="right">{thread.category}</TableCell>
                    <TableCell align="right">{thread.comment}</TableCell>
                    <TableCell align="right">
                      <button id='deleteThread' onClick={() => this.handleDelete(thread._id)}>Delete Thread</button>
                    </TableCell>
                  </TableRow>
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Link to='/createThread'>Create a Thread</Link>
      </div>
    )
  }
}

export default withRouter(ThreadIndex)
