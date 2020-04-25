// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from "styled-components";
// import Loader from "../../Components/Loader";
// import Section from "../../Components/Section";
//
//
// class SearchPresenter extends Component {
//     {
// movieResults, tvResults, error, keyword, loading, handleSubmit => null
//

//
// export default SearchPresenter;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;

`;



class SearchPresenter extends Component {

    render() {

        let {
            movieResults,
            tvResults,
            error,
            keyword,
            loading,
            handleSubmit,
            updateKeyword
        } = this.props;

        return (
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Search Movies or Tv Shows..."
                        value={keyword}
                        onChange={updateKeyword}
                    />
                </Form>
                {loading ? (
                    <Loader/>
                ) : (
                    <>
                        {movieResults && movieResults.length > 0 && (
                            <Section title="Movie Results">
                                {movieResults.map(movie => (
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        imageUrl={movie.poster_path}
                                        rating={movie.vote_average}
                                        year={movie.release_date}
                                    />
                                ))}
                            </Section>
                        )}

                        {tvResults && tvResults.length > 0 && (
                            <Section title="tv Results">
                                {tvResults.map(show => (
                                    <Poster
                                        key={show.id}
                                        id={show.id}
                                        title={show.name}
                                        imageUrl={show.poster_path}
                                        rating={show.vote_average}
                                        year={show.first_air_date}
                                    />
                                ))}
                            </Section>
                        )}
                    </>
                )}
            </Container>
        );
    }
}

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    keyword: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateKeyword: PropTypes.func.isRequired
};

export default SearchPresenter;