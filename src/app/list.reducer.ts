import * as ListActions from './list.action';
import { task } from './list';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';



export type ListTypes = ListActions.All


export const listAdapter = createEntityAdapter<task>();
export interface State extends EntityState<task> {}

export const initialState: State = listAdapter.getInitialState();


export function ListReducer(state: State = initialState, action: ListTypes) {
	switch(action.type) {
		case ListActions.ADD:
			return listAdapter.addOne(action.payload, state)
	
		case ListActions.DELETE:
			return listAdapter.removeOne(action.payload.id,state)
		
		case ListActions.MODIFIED:
			return listAdapter.updateOne({
				id: action.payload.id,
				changes: action.payload
			}, state)
		
		default:
		return state
  }
}


export const getListState = createFeatureSelector<State>('task');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = listAdapter.getSelectors(getListState);