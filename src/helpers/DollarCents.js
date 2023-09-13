export const DollarCents = (num) => {
    try {
        return `$${num.toFixed(2)}`
    } catch {
        return 
    }
}

