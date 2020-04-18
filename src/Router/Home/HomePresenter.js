// 실직적으로 화면에 보이는 부분
// 1번
import React from 'react';
// components에 대한 속성, 필수값은 아니다.
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from "../../Components/Loader";

//2번
const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) => (
loading ? (
    <Loader/>
) : (
    <div>
        {nowPlaying && nowPlaying.length > 0 && (
            nowPlaying.map(movie =>
                <span key={movie.id}>{movie.title}</span>
            )
        )}

        {popular && popular.length > 0 && (
            popular.map(movie =>
                <span key={movie.id}>{movie.title}</span>
            )
        )}

        {upcoming && popular.length > 0 && (
            popular.map(movie =>
                <span key={movie.id}>{movie.title}</span>
            )
        )}
    </div>
))

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;


