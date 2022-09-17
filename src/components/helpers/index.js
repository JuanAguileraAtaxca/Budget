
export const format = (value) => {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const generateId = () => {
    const firstPart = Date.now().toString().substring(3, 12);
    const secondPart = Math.random().toString().substring(3, 12);

    return firstPart + secondPart; 
}