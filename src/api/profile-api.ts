import { PhotosType, ProfileType } from "../components/types/types";
import { APIResponseType, instance } from "./api";
type SavePhotoResponseDataType = {
   photos: PhotosType
}

export const profileAPI = {
    getProfileUsers(profileId: number) {
        return  instance.get<ProfileType>(`profile/` + profileId).then(res => res.data);
       
     },
     getStatus(profileId: number) {
        return instance.get<string>(`profile/status/` + profileId).then(res => res.data)
     },
     updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status}).then(res => res.data);
     },
     
     savePhoto(photoFile: File) {
      const formData = new FormData();
      formData.append("image", photoFile)
      return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
        }
      }).then(res => res.data);
   },
   saveProfile(profile: ProfileType) {
     return instance.put<APIResponseType>(`profile`, profile).then(res => res.data);
   }
}





