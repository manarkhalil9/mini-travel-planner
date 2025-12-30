import { useState, useEffect } from "react"
import {
  GetComments,
  CreateComment,
  UpdateComment,
  DeleteComment,
} from "../services/commentServices"
import CommentItem from "./CommentItem"

const CommentSection = ({ tripId, user }) => {
  const [comments, setComments] = useState([])
  const [newFeedback, setNewFeedback] = useState("")
  const [newRating, setNewRating] = useState(5)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadComments()
  }, [tripId])

  const loadComments = async () => {
    setIsLoading(true)
    try {
      const data = await GetComments(tripId)
      setComments(data)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }
  // adding comment by thr loggedin user. we used trim here so the suer cannot submit empty comment . it should be a text then only the button will be enabled"
  const handleAddComment = async () => {
    if (!user || !newFeedback.trim()) return

    try {
      const newComment = await CreateComment(tripId, {
        feedback: newFeedback,
        rating: newRating,
      })
      setComments([newComment, ...comments])
      setNewFeedback("")
      setNewRating(5)
    } catch (error) {
      console.error(error)
    }
  }

  // used .mpa here so it will go throught each comment . after editing the comment it will show the new comment if not then remains unchanged. used if else situation here
  const handleEditComment = async (commentId, data) => {
    try {
      await UpdateComment(tripId, commentId, data)
      setComments(
        comments.map((c) => (c._id === commentId ? { ...c, ...data } : c))
      )
    } catch (error) {
      console.error(error)
    }
  }
//  it will check the comment id and will delete it accordingly, thats why used .filter
  const handleDeleteComment = async (commentId) => {
    try {
      await DeleteComment(tripId, commentId)
      setComments(comments.filter((c) => c._id !== commentId))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h4>Comments</h4>

      {user && (
        <div>
          <label>Rating:</label>
          <select
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <br />

          <textarea
            placeholder="Write your comment here"
            value={newFeedback}
            onChange={(e) => setNewFeedback(e.target.value)}
          />

          <br />

          <button onClick={handleAddComment} disabled={!newFeedback.trim()}>
            Add Comment
          </button>
        </div>
      )}

      {!user && <p>Log in to add a comment</p>}

      {isLoading ? (
        <p>Loading comments...</p>
      ) : comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => {

          const isOwner =
            user &&
            (user.id === comment.user?._id || user._id === comment.user?._id)
          console.log(
            "USER ID:",
            user?.id,
            user?._id,
            "COMMENT USER ID:",
            comment.user?._id
          )
          return (
            <CommentItem
              key={comment._id}
              comment={comment}
              isOwner={isOwner}
              onEdit={handleEditComment}
              onDelete={handleDeleteComment}
            />
          )
        })
      )}
    </div>
  )
}

export default CommentSection
