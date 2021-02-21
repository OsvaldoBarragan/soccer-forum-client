import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Spinner from 'react-bootstrap/Spinner'
import { threadIndex } from '../../api/threadsApi'

class ThreadIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      threads: null
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
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Post</TableCell>
              <TableCell align="right">Creator</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right"># of Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              threads.map((thread, index) => {
                return <TableRow key={index}>
                  <TableCell align="right">{thread.title}</TableCell>
                  <TableCell align="right">{thread.post}</TableCell>
                  <TableCell align="right">{thread.owner}</TableCell>
                  <TableCell align="right">{thread.category}</TableCell>
                  <TableCell align="right">{thread.comment}</TableCell>
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default ThreadIndex
