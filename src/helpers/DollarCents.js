export const DollarCents = (num) => {
    if (typeof num !== Number) {
        return 
    }
    return `$${num.toFixed(2)}`
}

