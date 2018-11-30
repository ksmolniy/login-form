// @flow
import request from './request';
import { type RegistrationData, type LoginData } from '../store/user';

export const checkTokenRequest = () => request('auth/check');
export const registrationRequest = (data: RegistrationData) => request('auth/reg', 'POST', data);
export const logInRequest = (data: LoginData) => request('auth/login', 'POST', data);
