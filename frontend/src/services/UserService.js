import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5000/users";

class UserService{
    //get all methods related to user crud

    getUsers(){
        return axios.get(USER_API_BASE_URL)
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId)
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user)
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user)
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId)
    }

}

export default new UserService()