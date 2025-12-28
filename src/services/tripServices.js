import Client from "./api";

export const GetTrips = async () => {
    try {
    const res = await Client.get('/trips')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetTripById = async (id) => {
  try {
    const res = await Client.get(`/trips/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateTrip = async (data) => {
  try {
    const res = await Client.post('/trips', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateTrip = async (id, data) => {
  try {
    const res = await Client.put(`/trips/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteTrip = async (id) => {
  try {
    const res = await Client.delete(`/trips/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}