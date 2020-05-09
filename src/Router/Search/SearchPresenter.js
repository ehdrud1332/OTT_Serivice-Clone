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
import Helmet from 'react-helmet';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Message from "../../Components/Message";

const Container = styled.div`
  padding: 15px 20px;
`;

const Form = styled.form`
  margin-bottom: 20px;
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

                <Helmet>
                    <title>Search | Netflix Clone</title>
                </Helmet>



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
                                        isMovie={true}
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
                        {error && <Message color="#e74c3c" text={error} />}
                        {tvResults && movieResults && tvResults.length === 0 &&
                            movieResults.length === 0 && <Message text="Nothing found" color="#95a5a6"/>
                        }

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