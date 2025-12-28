import Client from "./api";

export const GetAttractions = async () => {
    try {
        const res = await Client.get('/attraction')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetAttractionById = async (id) => {
    try {
        const res = await Client.get (`/attraction/${id}`)
        return res.data 
    } catch (error) {
        throw error
    }
}