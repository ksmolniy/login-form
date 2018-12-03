import { getCookie } from '../utils/cookie';

const apiUrl = ((process && process.env && process.env.REACT_APP_API_BASE_URL) || '') + ((process && process.env && process.env.REACT_APP_API_VERSION) || '');

export default function (url, method = 'GET', body) {
  const token = getCookie('token');
  const headers = new Headers();

  if (token) {
    headers.append('x-access-token', token);
  }

  const options = { method, headers };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(`${apiUrl}/${url}`, options)
    .then(res => res.json());
}
