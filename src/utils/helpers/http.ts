import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api.armon.tj/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});