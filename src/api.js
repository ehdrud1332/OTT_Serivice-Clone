import axios from "axios";

const api = axios.create({
    baseUrl: "https://api.themoviedb.org/3/",
    params: {
        api_key: "c1d76ca84cd92ecf70d3ef7766e55d7c",
        language: "kr-KR"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: keyword => {
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(keyword)
            }
        })
    }

};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    tvDetail: id =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: keyword => {
        api.get("search/tv", {
            params: {
                //검색어
                query: encodeURIComponent(keyword)
            }
        })
    }
};
