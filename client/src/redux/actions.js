import axios from 'axios'
export const GET_INFO = "GET_INFO"
export const POST_INFO = "POST_INFO"

export const getInfo = (payload) => {
    return async (dispatch) => {
        try {
        let info = await axios.get(`http://localhost:3001/inputs`)
        // console.log(info, "hoal actions")
            return dispatch ({
            type: GET_INFO,
            payload: info.data
        })
        } catch (error) {
            console.log(error)
        }
    }
}

export const postInfo = (data) => {
    return async (dispatch ) => {
        try {
        await axios.post(`http://localhost:3001/inputs`, data)
        } catch (error) {
            console.log(error)
        }
    }
}

