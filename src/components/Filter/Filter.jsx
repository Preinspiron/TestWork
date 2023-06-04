/* eslint-disable react-hooks/exhaustive-deps */
import Select from "react-select";
import PropTypes from "prop-types";
import { filterOptions } from "./options";
// import { useState, useEffect } from "react";
// import { useSearchParams, useParams } from "react-router-dom";
import "./Filter.scss";

const Filter = ({ change, urlValue }) => {
  return (
    <Select
      defaultValue={filterOptions[0]}
      className="filter-container"
      classNamePrefix="filter"
      options={filterOptions}
      value={filterOptions.find((el) => el.value === urlValue)}
      onChange={(e) => change(e.value)}
    />
  );
};

Filter.propTypes = {
  change: PropTypes.func,
};

export default Filter;
