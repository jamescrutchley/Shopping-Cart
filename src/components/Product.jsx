
const Product = () => {
    const mockProductData = {
        id: 1234,
        name: "sunglasses",
        description: "stylish and trendy unisex sunglasses",
        price: 32.50,
    }
    
    return (
        <div className="product">
            <p>{mockProductData.name}</p>
            <p>{mockProductData.price}</p>
        </div>
    )
}

export default Product;