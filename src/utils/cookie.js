export const getCookie = (key) => {
  const cookiesArr = document.cookie.split(';').map(cookie => cookie.split('='));

  const cookie = cookiesArr.find(([cookieName]) => cookieName === key);

  return cookie && cookie[1];
}

export const setCookie = (key, value, hours = 5) => {
  const d = new Date();
  d.setTime(d.getTime() + (hours*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = `${key}=${value};${expires};path=/`;
}

export const getToken = () => getCookie('token');

export const deleteCookie = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
