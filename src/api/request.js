import { getCookie } from '../utils/cookie';

const apiUrl = process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_VERSION;

export default function (url, method = 'GET', body) {
  const token = getCookie('token');
  const headers = {};
  if (token) {
    headers['x-access-token'] = token;
  }

  headers['Access-Control-Allow-Origin'] = '*';

  const options = {
    method,
    headers,
    mode: 'cors',
  };

  if (body) {
    options.body = JSON.stringify(body);
    headers['Content-Type'] = 'application/json';
  }

  return fetch(`${apiUrl}/${url}`, options)
    .then(res => res.json());
}
