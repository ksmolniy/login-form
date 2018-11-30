// @flow
import { getCookie } from '../utils/cookie';

type Methods = 'POST' | 'GET';

const apiUrl: string = ((process && process.env && process.env.REACT_APP_API_BASE_URL) || '') + ((process && process.env && process.env.REACT_APP_API_VERSION) || '');

export default function (url: string, method?: Methods = 'GET', body?: any): Promise<any> {
  const token = getCookie('token');
  const headers = new Headers();

  if (token) {
    headers.append('x-access-token', token);
  }

  const options: RequestOptions = { method, headers };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(`${apiUrl}/${url}`, options)
    .then(res => res.json());
}
