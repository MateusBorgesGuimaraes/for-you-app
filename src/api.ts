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

export function DELETE_COMMENT(id: string) {
  return {
    url: API_URL + 'comments/' + id,
  };
}

export function PUT_VIEWS(id: string) {
  return {
    url: API_URL + 'news/' + id + '/view',
  };
}

export function PUT_LIKES(id: string) {
  return {
    url: API_URL + 'news/' + id + '/like',
  };
}

export function PUT_COMMENT_LIKES(id: string) {
  return {
    url: API_URL + 'comments/' + id + '/like',
  };
}

export function PUT_SAVED_NEWS(id: string) {
  return {
    url: API_URL + 'user/' + id + '/save',
  };
}

export function GET_NEWS_BY_CATEGORY(category: string) {
  return {
    url: API_URL + 'news/category/' + category,
  };
}

export function GET_ALL_NEWS() {
  return {
    url: API_URL + 'news/category',
  };
}

export function GET_SAVED_NEWS() {
  return {
    url: API_URL + 'user/saved',
  };
}

export function GET_REDATOR_NEWS(id: string) {
  return {
    url: API_URL + 'news/user/' + id,
  };
}

export function POST_NEWS() {
  return {
    url: API_URL + 'news',
  };
}

export function DELETE_NEWS(id: string) {
  return {
    url: API_URL + 'news/' + id,
  };
}

export function PUT_NEWS(id: string) {
  return {
    url: API_URL + 'news/' + id,
  };
}
