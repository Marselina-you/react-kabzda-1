export type FieldValidatorType = (value: string) => string | undefined

export const required = (value: any) => {
    if (value) {
        return undefined
    }
    return 'field is requiered';
    
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) return `max length is ${maxLength}`
    return undefined;
}
