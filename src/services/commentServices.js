import Client from "./api";

export const GetComments = async (tripId) => {
  try {
    const res = await Client.get(`/${tripId}/comment`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCommentById = async (tripId, commentId) => {
  try {
    const res = await Client.get(`/${tripId}/comment/${commentId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (tripId, data) => {
  try {
    const res = await Client.post(`/${tripId}/comment`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateComment = async (tripId, commentId, data) => {
  try {
    const res = await Client.put(`/${tripId}/comment/${commentId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (tripId, commentId) => {
  try {
    const res = await Client.delete(`/${tripId}/comment/${commentId}`)
    return res.data
  } catch (error) {
    throw error
  }
}