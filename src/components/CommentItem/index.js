// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachComment, classNames, onDeleteComment, onLikeComment} = props
  const {id, name, comment, date, like} = eachComment
  const color = classNames

  const initial = name.slice(0, 1)

  const index = Math.ceil(Math.random() * classNames.length - 1)
  const BgColor = color[index]

  const onDelete = () => onDeleteComment(id)
  const onLike = () => onLikeComment(id)
  const url = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const style = like ? 'like' : 'unlike'

  return (
    <li>
      <div className="name-container-flex">
        <h1 className={`initial-letter ${BgColor}`}>{initial}</h1>
        <p className="name">{name}</p>
        <p className="time">{formatDistanceToNow(new Date(date))}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="button-container ">
        <div>
          <img src={url} alt="like" className="image" />
          <button type="button" onClick={onLike} className={`${style}`}>
            Like
          </button>
        </div>
        <button type="button" onClick={onDelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="image"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
