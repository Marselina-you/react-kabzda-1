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
   
     follow(userId) {
        return instance.post(`follow/${userId}`).then(res => res.data)
     },
     unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data)
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
     },
     
     savePhoto(photoFile) {
      const formData = new FormData();
      formData.append("image", photoFile)
      //debugger;
      return instance.put(`profile/photo`, formData);
   },
   saveProfile(profile) {
     return instance.put(`profile`, profile);
   }
}
export const authAPI = {
   me()  { 
      return instance.get(`auth/me`)
   },
   login(email, password, rememberMe = false)  { 
      return instance.post(`auth/login`, {email, password, rememberMe})
   },
   logout(email, password, rememberMe = false)  { 
      return instance.delete(`auth/login`);
   }
}




