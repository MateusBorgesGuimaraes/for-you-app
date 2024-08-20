const API_URL = 'http://localhost:3001/api/';

export function GET_CUSTOMS() {
  return {
    url: API_URL + 'news/custom',
  };
}

export function POST_TOKEN() {
  return {
    url: API_URL + 'login',
  };
}

export function GET_USER() {
  return {
    url: API_URL + 'login/user',
  };
}

export function POST_USER() {
  return {
    url: API_URL + 'login/register',
  };
}

export function GET_NEWS(id: string) {
  return {
    url: API_URL + 'news/' + id,
  };
}

export function POST_COMMENT() {
  return {
    url: API_URL + 'comments',
  };
}
