// import React, { Component } from 'react'
// import Threadform from '../Forms/Threadform'
// import { Redirect } from 'react-router-dom'
// import { commentCreate } from '../../api/threadsApi'
//
// class CommentCreate extends Component {
//   constructor (props) {
//     super(props)
//
//     console.log('ThreadCreate constructor: ')
//     console.log(props)
//
//     this.state = {
//       comment: {
//         threadId: '',
//         body: ''
//       },
//       createdId: null
//     }
//   }
//   handleSubmit = event => {
//     event.preventDefault()
//     const { user, msgAlert } = this.props
//     const { thread } = this.state
//
//     console.log('Props: ')
//     console.log(this.props)
//
//     commentCreate(user, thread)
//       .then(res => {
//         this.setState({ createdId: res.data.thread._id })
//         return res
//       })
//       .then(res => msgAlert({
//         heading: 'Thread has been submitted',
//         message: 'You are now viewing your created thread.',
//         variant: 'success'
//       }))
//       .catch(error => {
//         msgAlert({
//           heading: 'Thread was unable to be submitted',
//           message: 'An error has occured. The error is: ' + error.message,
//           variant: 'danger'
//         })
//       })
//   }
//   handleChange = event => {
//     event.persist()
//     this.setState(state => {
//       return {
//         thread: { ...state.thread, [event.target.name]: event.target.value }
//       }
//     })
//   }
//
//   render () {
//     const { thread, createdId } = this.state
//     if (createdId) {
//       return <Redirect to={`/category/${thread.category}/threads/${createdId}`} />
//     }
//     return (
//       <div>
//         <h3>Create a Thread</h3>
//         <Threadform
//           thread={thread}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />
//       </div>
//     )
//   }
// }
//
// export default CommentCreate
