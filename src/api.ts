const API_URL = 'http://localhost:3001/api/';

export function GET_CUSTOMS() {
  return {
    url: API_URL + 'news/custom',
  };
}

export function GET_TOKEN() {
  return {
    url: API_URL + 'login',
  };
}

export function GET_USER() {
  return {
    url: API_URL + 'login/user',
  };
}
