## 주요기능

-----------------
- Axios를 이용한 Networking 및 API 뿌려주기
- 메인화면 구현 (Movie ,TV)
- 클릭시 상세정보 제공 페이지 구현
- Keyword 기입 Search 페이지 구현

## 완성화면

-----------------
<img src=“https://user-images.githubusercontent.com/60862525/92943571-e7846100-f48d-11ea-9aae-1e3af0f61b8e.gif” width=“30%”><img src=“https://user-images.githubusercontent.com/60862525/92942804-e69eff80-f48c-11ea-9052-0649959e9eaf.gif” width=“30%”>

## 활용한 기술
-----------------
- nodeJS, React, Axios(NetWorking)
- Netlify, TMDB
- PosterImage, DetailPosterImage etc.

## 스터디 노트
-----------------

**Axios를 이용한 API 네트워킹**

- API를 활용해 원하는 항목 뿌려주기(Popular, Now-Playing etc.)
- http 서보와의 통신을 위해 네트워크 라이브러리 Axios를 사용했고 이를 통해서 모듈화 진행
- Postman을 활용해 서버연결 테스트 및 결과값 체크

**_API 연결 방식 스터디_**

1. 네트워킹 하기위해 axios.create(baseUrl, api_key) 상수화
2. 원하는 정보 추출을 위한 불러오기 함수 생성

<img src=“https://user-images.githubusercontent.com/60862525/92945385-29160b80-f490-11ea-9bea-1d8a7a6089c2.png” width=“40%”>

3. 조건문을 통한 특정 정보 추출
~~~
{nowPlaying && nowPlaying.length > 0 && (
    <Section title="Now-Playing">
        {nowPlaying.map(movie =>
            <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                year={movie.release_date}
                rating={movie.vote_average}
                isMovie={true}
            />
        )}
    </Section>

)}

~~~

**Keyword  검색으로 값 불러오기**

1. 초기 상태값 정해주기
~~~
state = {
    movieResults: null,
    tvResults: null,
    keyword: "",
    loading: false,
    error: null
}
~~~
2. Keyword 함수 만들기
~~~
handleSubmit = event => {
    // 이것해줘야 키워드 값이 인식이 된다.
    event.preventDefault();
    const {keyword} = this.state;
    if (keyword !== "") {
        this.searchByKeyword();
    }
};

1. 비동기방식으로 진행
2. try에 대한 결과값을 상수화 및 상태값 재선언
searchByKeyword = async () => {
    const {keyword} = this.state;
    this.setState({loading: true})
    try {
        const {
            data : { results: movieResults}
        } = await moviesApi.search(keyword)
        const {
            data : { results: tvResults}
        } = await tvApi.search(keyword)
        this.setState({
            movieResults, tvResults
        });
    } catch {
        this.setState({error: "can't find results"});
    } finally {
        this.setState({loading: false});
    }
};

~~~
3. Keyword에 반응하는 검색창 생성 
~~~
<Form onSubmit={handleSubmit}>
    <Input
        placeholder="Search Movies or Tv Shows..."
        value={keyword}
        onChange={updateKeyword}
    />
</Form>

~~~




