import Row from "../../Rows/Row/Row.js";
import requests from "../../../utils/requests.js";
const RowList = () => {
  return (
    <>
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
    </>
  );
};

export default RowList;
