import Client from "./api";

export const GetAllPlans = async () => {
    try {
        const res = await Client.get('/plan')
        return res.data 
    } catch (error) {
        throw error
    }
}

export const GetPlanById = async (id) => {
  try {
    const res = await Client.get(`/plan/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreatePlan = async (data) => {
  try {
    const res = await Client.post('/plan', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePlan = async (id, data) => {
  try {
    const res = await Client.put(`/plan/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeletePlan = async (id) => {
  try {
    const res = await Client.delete(`/plan/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}