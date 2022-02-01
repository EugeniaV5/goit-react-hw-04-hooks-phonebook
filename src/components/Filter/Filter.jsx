import PropTypes from 'prop-types';

import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      </FilterLabel>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
