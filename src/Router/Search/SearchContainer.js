import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";
import {moviesApi, tvApi} from "../../api";



class SearchContainer extends Component {

    state = {
        movieResults: null,
        tvResults: null,
        keyword: "",
        loading: false,
        error: null
    }

    handleSubmit = () => {
        const {keyword} = this.state;
        if (keyword !== "") {
            this.searchByKeyword();
        }

    };

    searchByKeyword = async () => {
        const {keyword} = this.state;
        this.setState({loading: true})
        try {
            const {
                data : { results: moviesResults}
            } = await moviesApi.search(keyword)
            const {
                data : { results: tvResults}
            } = await tvApi.search(keyword)
            this.setState({
                moviesResults, tvResults
            });
        } catch {
            this.setState({error: "can't find results"});
        } finally {
            this.setState({loading: false});
        }
    };

    render() {

        const {movieResults, tvResults, keyword, loading, error} = this.state;

        return (
            <SearchPresenter
                loading={loading}
                handleSubmit={this.handleSubmit}
                Keyboard={keyword}
                movieResults={movieResults}
                tvResults={tvResults}
                error={error}
            />
        );
    }
}

export default SearchContainer;