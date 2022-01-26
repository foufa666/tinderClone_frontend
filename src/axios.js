import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-appclone-backend.herokuapp.com"
})

export default instance