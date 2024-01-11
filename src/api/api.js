import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "0d22077a-fb97-4dd0-9851-e99421b7879d"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
         return response.data;
       });
     },
     getProfileUsers(profileId) {
        return profileAPI.getProfileUsers(profileId)
       
     },
     follow(userId) {
        return instance.post(`follow/${userId}`)
     },
     unfollow(userId) {
        return instance.delete(`follow/${userId}`)
     }
   
}
export const profileAPI = {
    getProfileUsers(profileId) {
        return  instance.get(`profile/` + profileId);
       
     },
     getStatus(profileId) {
        return instance.get(`profile/status/` + profileId)
     },
     updateStatus(status) {
        //debugger;
        return instance.put(`profile/status`, {status: status});
     }
}
export const authAPI = {
    me()  { 
        return instance.get(`auth/me`)}
}




