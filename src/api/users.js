// @flow
import request from './request';

export const getBalance = (): Promise<number> => request('user/balance');
