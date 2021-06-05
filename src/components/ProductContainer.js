import React from 'react';
import PostData from '../data/products.json';
import Footer from './Footer';
import Card from './Card';

const ProductContainer = () => {
    return (
        <div className='productSection'>
            <h1 className="titleHeader">COSETTE</h1>
            <h2 className="subTitleHeader">luxury, every day</h2>
            {PostData.map((productInfo, index) => {
                return (
                    <Card key={productInfo.sku}{...productInfo} />
                )
            })}
            <Footer />
        </div>
    );
}

export default ProductContainer;
