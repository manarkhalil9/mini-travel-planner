import Client from "./api"

export const GetComments = async (tripId) => {
  try {
    const res = await Client.get(/trip/${tripId}/comment)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCommentById = async (tripId, commentId) => {
  try {
    const res = await Client.get(/trip/${tripId}/comment/${commentId})
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (tripId, data) => {
  try {
    const res = await Client.post(/trip/${tripId}/comment, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateComment = async (tripId, commentId, data) => {
  try {
    const res = await Client.put(/trip/${tripId}/comment/${commentId}, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (tripId, commentId) => {
  try {
    const res = await Client.delete(/trip/${tripId}/comment/${commentId})
    return res.data
  } catch (error) {
    throw error
  }
}
