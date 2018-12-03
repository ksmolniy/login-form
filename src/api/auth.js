import request from './request';

export const checkTokenRequest = () => request('auth/check');
export const registrationRequest = (data) => request('auth/reg', 'POST', data);
export const logInRequest = (data) => request('auth/login', 'POST', data);
