

export const sortProducts = (products, sortBy) => {
    let sorted;
    console.log('sorting by ', sortBy)
    switch (sortBy) {
        case null:
            sorted = products.slice();
            break;
        case 'asc':
            sorted = products.slice().sort((a, b) => a.price - b.price);
            break;
        case 'desc':
            sorted = products.slice().sort((a, b) => b.price - a.price);
            break;
        default:
            break;
    }
    return sorted;
}


export const searchProducts = (products, searchTerm) => {
    if (searchTerm === null) return products;
    const regexp = new RegExp(searchTerm, 'i');
    console.log('filtering by ' + searchTerm)
    console.log(products)
    let searched;
    searched = products.filter((item) => regexp.test(item.title));
    return searched;
}