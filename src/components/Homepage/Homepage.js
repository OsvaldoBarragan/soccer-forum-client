import React from 'react'
import { Link } from 'react-router-dom'
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

function createData (category, description, threads, comments) {
  return { category, description, threads, comments }
}

const rows = [
  createData('Premier League', 'Everything about England\'s top flight', 0, 0),
  createData('Serie A', 'Serie A News and Discussions', 0, 0),
  createData('La Liga', 'All about La Liga', 0, 0),
  createData('Ligue 1', 'Discussions and Information about France\'s top league', 0, 0),
  createData('Bundesliga', 'Germany\'s top league', 0, 0),
  createData('Other Leagues', 'Discuss about lesser-known leagues here', 0, 0),
  createData('International', 'News about International teams', 0, 0),
  createData('Bootroom', 'Discuss soccer in general', 0, 0),
  createData('Off Topic', 'Discuss anything in general', 0, 0)
]

export default function BasicTable (e) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Threads</TableCell>
            <TableCell align="right">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.category}>
              <TableCell className="categories" component="th" scope="row">
                <Link to={`/category/${row.category}`}>{row.category}</Link>
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
