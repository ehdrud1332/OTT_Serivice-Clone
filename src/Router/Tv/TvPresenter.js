import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TvPresenter = ({ topRated, popular, airingToday, loading, error}) =>
    <h1>ffrvfvrvrg</h1>

TvPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TvPresenter;