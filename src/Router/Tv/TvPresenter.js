import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";


const Container = styled.div`
  padding: 20px 30px;
`;

const TvPresenter = ({ topRated, popular, airingToday, loading, error}) => (
    loading ? (
        <Loader/>
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="topRated">
                    {topRated.map(tv =>
                        <span key={tv.id}>{tv.original_name}</span>
                    )}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="popular">
                    {popular.map(tv =>
                        <span key={tv.id}>{tv.original_name}</span>
                    )}
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="airingToday">
                    {airingToday.map(tv =>
                        <span key={tv.id}>{tv.original_name}</span>
                    )}
                </Section>

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