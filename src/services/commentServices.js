import Client from "./api"

export const GetComments = async (tripId) => {
  try {
    const res = await Client.get(/trip/${tripId}/comment)
    return res.data
  } catch (error) {
    throw error
  }
}
