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

    handleSubmit = event => {
        // 이것해줘야 키워드 값이 인식이 된다.
        event.preventDefault();
        const {keyword} = this.state;
        if (keyword !== "") {
            this.searchByKeyword();
        }

    };

    updateKeyword = event => {
        const {
            target: {value}
        } = event;
        this.setState({
            keyword: value
        })
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
                updateKeyword={this.updateKeyword}
            />
        );
    }
}

export default SearchContainer;