// import React, { Component } from 'react'
// import { Table } from '@material-ui/core'
//
// class UnauthHomepage extends Component {
//   constructor (props) {
//     super(props)
//
//     this.state = {}
//   }
//
//   showCategories
// }

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 100
  }
})

function createData (categories, description, threads, comments) {
  return { categories, description, threads, comments }
}

const rows = [
  createData('Premier League', 'Everything about England\'s top flight', 1, 2),
  createData('Serie A', 'Serie A News and Discussions', 1, 2),
  createData('La Liga', 'All about La Liga', 1, 2),
  createData('Ligue 1', 'Discussions and Information about France\'s top league', 1, 2),
  createData('Bundesliga', 'Germany\'s top league', 1, 2),
  createData('Other Leagues', 'Discuss about lesser-known leagues here', 1, 2),
  createData('International', 'News about International teams', 1, 2),
  createData('Bootroom', 'Discuss soccer in general', 1, 2),
  createData('Off Topic', 'Discuss anything in general', 1, 2)
]

export default function BasicTable () {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Threads</TableCell>
            <TableCell align="right">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.categories}>
              <TableCell component="th" scope="row">
                {row.categories}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.threads}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
