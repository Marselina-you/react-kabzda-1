import axios from "axios";
import { ProfileType } from "../components/types/types";
export enum ResultCodesEnum {
   Success = 0,
   Error = 1,
   
 }
 export enum ResultCodeForCaptcha {
   CaptchaIsRequired = 10
 }
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
   
     follow(userId: number) {
        return instance.post(`follow/${userId}`).then(res => res.data)
     },
     unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data)
     }
   
}
export const profileAPI = {
    getProfileUsers(profileId: number) {
        return  instance.get(`profile/` + profileId);
       
     },
     getStatus(profileId: number) {
        return instance.get(`profile/status/` + profileId)
     },
     updateStatus(status: string) {
        //debugger;
        return instance.put(`profile/status`, {status: status});
     },
     
     savePhoto(photoFile: any) {
      const formData = new FormData();
      formData.append("image", photoFile)
      //debugger; 
      return instance.put(`profile/photo`, formData);
   },
   saveProfile(profile: ProfileType) {
     return instance.put(`profile`, profile);
   }
}
type MeResponseType = {
   data: {
      id: number
      email: string
      login: string
   }
   resultCode: ResultCodesEnum
   messages: Array<string>
}
type LoginResponseType = {
   data: {
      userId: number
   }
   resultCode: ResultCodesEnum | ResultCodeForCaptcha
   messages: Array<string>
}
export const authAPI = {
   me()  { 
      return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
   },
   login(email: string, password: string, rememberMe = false, captcha: null | string = null)  { 
      return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
      .then(res => res.data)
   },
   logout()  { 
      return instance.delete(`auth/login`);
   }
}
export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`)
   }
}





