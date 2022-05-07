import React from 'react';
import PropTypes from 'prop-types';

const ProductCategoryRow = ({category}) => (
  <tr>
    <td colSpan="2">{category}</td>
  </tr>
);
ProductCategoryRow.propTypes = {
  category: PropTypes.string,
};
export default ProductCategoryRow;
