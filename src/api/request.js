import { getCookie } from '../utils/cookie';

const apiUrl = process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_VERSION;

export default function (url, method = 'GET', body) {
  const token = getCookie('token');
  const headers = {};
  if (token) {
    headers['x-access-token'] = token;
  }

  headers['Access-Control-Allow-Origin'] = '*';
  headers['Accept'] = 'application/json, text/plain, */*';

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
    .then(res => res.text().then(text => ({ status: res.status, text })))
    .then(({ text, status }) => {
      let json;
      try {
        json = JSON.parse(text);
      } catch (e) {
        throw { message: 'не удалось распарсить JSON' };
      }
      const firstNumber = Math.floor(status / 100);

      if ([4,5].includes(firstNumber)) {
        throw json;
      }

      return json;
    });
}
