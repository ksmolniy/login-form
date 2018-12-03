import request from './request';

export const getTasks = () => request('task');
export const postTask = (task) => request('task/', 'POST', );
