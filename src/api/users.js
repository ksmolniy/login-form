import request from './request';

export const getBalance = () => request('user/balance');
