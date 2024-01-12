export const required = value => {
    if (value) {
        return undefined
    }
    return 'field is requiered';
    
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `max length is ${maxLength}`
    return undefined;
}