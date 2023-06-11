const ProductRow = ({ product }) => {
  let color = 'black';

  if (!product.inStock) {
    color = 'red';
  }

  return (
    <tr style={{ border: '2px solid black' }}>
      <td style={{ padding: '10px', color: color }}>{product.name}</td>
      <td style={{ padding: '10px', color: color }}>{product.category}</td>
      <td style={{ padding: '10px', color: color }}>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
