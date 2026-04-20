import ProductsCard from '@/components/ProductsCard';
import React from 'react';

const getProducts =  async() => {

    const res = await fetch('http://localhost:3004/products',
    { cache: 'force-cache' })
    return res.json()
}


const ProductsPage = async() => {

 const products = await getProducts();

    return (
        <div>
            <h2>Products: {products.length} </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    products.map(product => <ProductsCard key={product.id} product = {product}></ProductsCard> )
                }
            </div>
        </div>
    );
};

export default ProductsPage;