import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import PropTypes from 'prop-types';


const ProductTable = ({products, inStockOnly, filterText}) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    console.log(inStockOnly);
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />,
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array,
  inStockOnly: PropTypes.bool,
  filterText: PropTypes.string,
};
export default ProductTable;
