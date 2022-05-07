import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99',
    stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99',
    stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
];

const FilterableProductTable = () => {
  const [filterText, setFilterText] = React.useState('');
  const [inStockOnly, setInStockOnly] = React.useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={PRODUCTS}
        inStockOnly={inStockOnly}
        filterText={filterText}
      />
    </div>
  );
};

export default FilterableProductTable;
