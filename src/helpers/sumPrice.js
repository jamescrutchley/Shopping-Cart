const sumPrice = (...values) => values.reduce((a, b, index) => (Number(a)+b), []);



export default sumPrice;