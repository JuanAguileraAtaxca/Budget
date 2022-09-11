
export const format = (value) => {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}