import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";
import {tvApi} from "../../api";

export default class TvContainer extends Component {

    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    };
    async componentDidMount() {
        try {
            const {
                data: { results : topRated}
            } = await tvApi.topRated();
            const {
                data: {results : popular}
            } = await tvApi.popular();
            const {
                data : {results : airingToday}
            } = await tvApi.airingToday();
            this.setState({ topRated, popular, airingToday })
        } catch {
            this.setState({
                error: "can't find Tv information"
            })
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        const { loading, popular, airingToday, error, topRated } = this.state;
        return (
            <div>
                <TvPresenter
                    loading={loading}
                    error = {error}
                    popular={popular}
                    topRated={topRated}
                    airingToday={airingToday}
                />
            </div>
        );
    }
}

