import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {

    state = {
        movieResults: null,
        tvResults: null,
        keyword: "",
        loading: false,
        error: null
    }

    handleSubmit = () => {

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