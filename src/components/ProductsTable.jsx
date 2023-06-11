import React from 'react';
import ProductRow from './ProductRow'; //Up State: {product}

const ProductsTable = ({ products }) => {
  return (
    <div>
      <table style={{ width: '100%', margin: '20vh auto' }}>
        <thead>
          <tr style={{ backgroundColor: 'lightgray' }}>
            <th style={{ padding: '15px' }}>Name</th>
            <th style={{ padding: '15px' }}>Category</th>
            <th style={{ padding: '15px' }}>Price</th>
          </tr>
        </thead>
        <tbody style={{ padding: '20px' }}>
          {products.map((product) => (
            <ProductRow key={products.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
