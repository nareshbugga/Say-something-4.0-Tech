import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const List = []
// Write your code here
class Comments extends Component {
  state = {commentList: List, name: '', comment: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      like: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    const result = commentList.filter(eachComment => eachComment.id !== id)
    this.setState({commentList: result})
  }

  onLikeComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, like: !eachComment.like}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentList, name, comment} = this.state
    return (
      <div>
        <div className="flex-container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="about-comment">
              Say something about 4.0 Technologies
            </p>
            <form onSubmit={this.onAddComment}>
              <input
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeName}
                value={name}
              />
              <br />
              <textarea
                rows="8"
                cols="50"
                placeholder="Your Comment"
                className="comment-input"
                value={comment}
                onChange={this.onChangeComment}
              />
              <br />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
          </div>
        </div>
        <div className="comment-box">
          <div className="flex-box">
            <p className="count-box">{commentList.length}</p>
            <p className="count-label">Comments</p>
          </div>
          <ul>
            {commentList.map(eachComment => (
              <CommentItem
                eachComment={eachComment}
                key={eachComment.id}
                classNames={initialContainerBackgroundClassNames}
                onDeleteComment={this.onDeleteComment}
                onLikeComment={this.onLikeComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
