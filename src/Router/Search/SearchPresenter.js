import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const SearchPresenter = ({movieResults, tvResults, error, keyword, loading, handleSubmit}) => null

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    keyword: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;