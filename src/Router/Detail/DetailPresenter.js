import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../Components/Loader";
import styled from 'styled-components';

const DetailPresenter = ({result, loading, error}) => (
    loading ? (
        <Loader/>
    ) : (
        <div>
            <span>sadfads</span>
        </div>
    )
)

DetailPresenter.propTypes = {
    result: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default DetailPresenter;