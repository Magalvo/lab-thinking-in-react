import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [originalProducts] = useState(jsonData); // Store the original unfiltered list
  const [searchValue, setSearchValue] = useState(''); // Store the value of the search bar

  const searchHandler = (filterProduct, isChecked) => {
    setSearchValue(filterProduct); // Update the search bar value

    let copy = [...originalProducts]; // Use the original unfiltered list
    copy = copy.filter((product) =>
      product.name.toLowerCase().includes(filterProduct.toLowerCase())
    );
    if (isChecked) {
      copy = copy.filter((product) => product.inStock === isChecked);
    }
    setProducts(copy);
  };

  const checkboxHandler = (isChecked) => {
    if (isChecked) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.inStock === isChecked)
      );
    } else {
      setSearchValue(''); // Clear the search bar value
      setProducts(originalProducts); // Revert to the original unfiltered list
    }
  };

  return (
    <>
      <div>
        <h1 style={{ backgroundColor: 'lightcyan' }}>IronStore</h1>
      </div>
      <SearchBar
        handleChangeSearchBar={searchHandler}
        handleChangeCheckbox={checkboxHandler}
        value={searchValue} // Pass the search bar value as a prop
      />
      <ProductsTable products={products} />
    </>
  );
}

export default ProductsPage;
