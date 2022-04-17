import { API_KEY } from '@env';

export const getHeaders = {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
    "x-rapidapi-key": API_KEY
  }
}

export const url = {
  global: "https://coinpaprika1.p.rapidapi.com/global",
  search: "https://api.coinpaprika.com/v1/search?q=",
  details: "https://api.coinpaprika.com/v1/coins/",
  markets: "https://api.coinpaprika.com/v1/coins/",
  events: "https://api.coinpaprika.com/v1/coins/",
  twitter: "https://api.coinpaprika.com/v1/coins/"
}