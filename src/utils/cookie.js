export function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
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
