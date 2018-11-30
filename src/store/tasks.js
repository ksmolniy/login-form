// @flow
import { createReducer } from 'redux-act';

export type Task = {  
  +id: number,
  +owner_id: number,
  +item_id: number,
  +like: number,
  +comment: number,
  +repost: number,
  +status: number,
  +time: string,
  +creator_id: number,
  +createdAt: string,
  +updatedAt: string,
  +liked: number,
}

export type Tasks = {
  +count: number,
  +rows: Task[],
}

const initialState: Tasks = {
  count: 0,
  rows: [],
}
export default createReducer<Tasks>({
  
}, initialState)
