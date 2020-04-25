import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster"


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
                        <Poster
                            id={tv.original_name}
                            title={tv.name}
                            imageUrl={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date}
                        />
                    )}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="popular">
                    {popular.map(tv =>
                        <Poster
                            id={tv.original_name}
                            title={tv.name}
                            imageUrl={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date}
                        />
                    )}
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="airingToday">
                    {airingToday.map(tv =>
                        <Poster
                            id={tv.original_name}
                            title={tv.name}
                            imageUrl={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date}
                        />
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