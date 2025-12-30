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
    <div>
      <p>
        <strong>{comment.user?.name || "Anonymous"}</strong>
      </p>

      {isEditing ? (
        <>
          <label>Rating:</label>
          <select
            value={editedRating}
            onChange={(e) => setEditedRating(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <br />

          <textarea
            value={editedFeedback}
            onChange={(e) => setEditedFeedback(e.target.value)}
          />

          <br />

          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>Rating: {comment.rating} / 5</p>
          <p>{comment.feedback}</p>

          {isOwner && (
            <>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => onDelete(comment._id)}>Delete</button>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default CommentItem
