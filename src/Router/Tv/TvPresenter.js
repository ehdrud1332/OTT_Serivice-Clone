import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from "../../Components/Loader";


const Container = styled.div`
  padding: 20px 30px;
`;

const TvPresenter = ({ topRated, popular, airingToday, loading, error}) => (
    loading ? (
        <Loader/>
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                topRated.map(tv =>
                    <span key={tv.id}>{tv.original_name}</span>
                )
            )}

            {popular && popular.length > 0 && (
                popular.map(tv =>
                    <span key={tv.id}>{tv.original_name}</span>
                )
            )}

            {airingToday && airingToday.length > 0 && (
                airingToday.map(tv =>
                    <span key={tv.id}>{tv.original_name}</span>
                )
            )}
        </Container>
    )
)


TvPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TvPresenter;