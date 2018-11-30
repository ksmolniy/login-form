// @flow
import request from './request';
import { type Task, type Tasks } from '../store/tasks';

type TaskRequest = {
  post: string,
  count: number,
}

export const getTasks = (): Promise<Tasks> => request('task');
export const postTask = (task: TaskRequest) => request('task/', 'POST', );
