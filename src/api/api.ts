import axios from "axios";
import { ProfileType, UserType } from "../components/types/types";
export enum ResultCodesEnum {
   Success = 0,
   Error = 1,
   
 }
 export enum ResultCodeForCapcthaEnum {
   CaptchaIsRequired = 10
}
export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "0d22077a-fb97-4dd0-9851-e99421b7879d"
    }
});
export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
   data: D
   messages: Array<string>
   resultCode: RC
}





