/* eslint-disable react-hooks/exhaustive-deps */
import Select from 'react-select';
import PropTypes from 'prop-types';
import { filterOptions } from './options';
// import { useState, useEffect } from "react";
// import { useSearchParams, useParams } from "react-router-dom";
import './Filter.scss';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#5cd3a8', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#471ca9', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];
const Filter = ({ change, urlValue }) => {
  return (
    <Select
      defaultValue={filterOptions[0]}
      className="filter-container"
      styles={{
        singleValue: (base) => ({ ...base, color: 'white', fontSize: '16px' }),
        valueContainer: (base) => ({
          ...base,
          background: colourOptions[1].color,
          color: 'white',
          width: '100%',
        }),
      }}
      options={filterOptions}
      value={filterOptions.find((el) => el.value === urlValue)}
      onChange={(e) => change(e.value)}
      isSearchable
      isClearable
    />
  );
};

Filter.propTypes = {
  change: PropTypes.func,
  urlValue: PropTypes.string,
};

export default Filter;
