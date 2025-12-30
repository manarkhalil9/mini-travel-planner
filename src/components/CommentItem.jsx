import { useState } from "react"

const CommentItem = ({ comment, isOwner, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedFeedback, setEditedFeedback] = useState(comment.feedback)
  const [editedRating, setEditedRating] = useState(comment.rating)

  const handleSave = () => {
    onEdit(comment._id, {
      feedback: editedFeedback,
      rating: editedRating,
    })
    setIsEditing(false)
  }

  return (
    <div className="comment">
      <div className="comment__top">
        <div className="comment__author">{comment.user?.name || "Anonymous"}</div>
        <div className="comment__rating">⭐ {comment.rating} / 5</div>
      </div>

      {isEditing ? (
        <div className="comment__edit">
          <div className="field">
            <label className="label">Rating</label>
            <select
              className="select"
              value={editedRating}
              onChange={(e) => setEditedRating(Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <textarea
            className="textarea"
            value={editedFeedback}
            onChange={(e) => setEditedFeedback(e.target.value)}
          />

          <div className="comment__actions">
            <button className="btn" onClick={handleSave}>Save</button>
            <button className="btn btn--ghost" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <p className="comment__text">{comment.feedback}</p>
          {isOwner && (
            <div className="comment__actions">
              <button className="btn btn--ghost" onClick={() => setIsEditing(true)}>Edit</button>
              <button className="btn btn--danger" onClick={() => onDelete(comment._id)}>Delete</button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default CommentItem
