import axios, { AxiosResponse } from 'axios';
import { Movie } from '../types/movie';

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL as string;
const TOKEN    = import.meta.env.VITE_TMDB_TOKEN   as string;

interface TMDBSearchResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export const fetchMovies = async (
  query: string,
  page = 1
): Promise<Movie[]> => {
  const response: AxiosResponse<TMDBSearchResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: { query: query.trim(), page },
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  );
  return response.data.results;
};