export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}
export type DialogsType = {
    id:number,
    name: string,
    
    
}
export type MessagesType = {
    id: number,
    content: string
}
export type UserType = {
    
    id: number,
    name: string,
    photos: PhotosType,
    status: string,
    followed: boolean
}


