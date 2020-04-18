// 실직적으로 화면에 보이는 부분
// 1번
import React from 'react';
// components에 대한 속성, 필수값은 아니다.
import PropTypes from 'prop-types';
import styled from 'styled-components';

//2번
const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) =>
    <h1>dfdfgffd</h1>

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;


