import axios from "axios";

import type { Movie } from "../types/movies";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "";

type AxiosConfigType = unknown;

export const getAllMovies = async ({ page }: { page: number }) => {
  const response = await axios.get<
    AxiosConfigType & { params: { api_key: string; sort_by: string; query: string; page: number } },
    { data: { results: Movie[] } }
  >(`${API_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      sort_by: "popularity,desc",
      query: "",
      page,
    },
  });

  return response.data;
};

export const getMovie = async (id: number | string) => {
  const response = await axios.get<
    AxiosConfigType & { params: { api_key: string } },
    {
      data: Movie;
    }
  >(`${API_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};
