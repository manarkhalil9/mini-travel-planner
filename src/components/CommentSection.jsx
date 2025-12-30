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
    
  )
}

export default CommentItem
