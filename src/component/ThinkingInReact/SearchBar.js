import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  filterText,
  setFilterText,
  inStockOnly,
  setInStockOnly,
}) => {
  const handleProductsSearch = (e) => {
    setFilterText(e.target.value);
  };

  const handleStockCheck = (value) => {
    setInStockOnly(value.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleProductsSearch}
      />
      <p>
        <input
          type="checkbox"
          value={inStockOnly}
          onChange={handleStockCheck}
        />{' '}
                Only show products in stock
      </p>
    </form>
  );
};
SearchBar.propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  setFilterText: PropTypes.func,
  setInStockOnly: PropTypes.func,
};
export default SearchBar;
