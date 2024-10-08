import { FETCH_OPTIONS, TMDB_MOVIE_DETAIL_URL } from '../constants/constant.js';

export const fetchMovies = async (type) => {
  const response = await fetch(type, FETCH_OPTIONS);
  return await response.json();
};

export const fetchMovieDetail = async (id) => {
  const url = TMDB_MOVIE_DETAIL_URL + id;
  const params = new URLSearchParams({
    language: 'ko-KR',
  });
  const response = await fetch(url + '?' + params, FETCH_OPTIONS);
  return await response.json();
};
