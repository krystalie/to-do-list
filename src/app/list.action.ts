import { Action } from '@ngrx/store';
import { task } from './list'

export const ADD = '[task] added'
export const DELETE = '[task] removed'
export const QUERY = '[task] Query List'
export const UPDATE = '[task] Update'
export const SUCCESS = '[task] Success'
export const MODIFIED = '[task] modified'




export class Add implements Action {
	readonly type = ADD;
	
	constructor(public payload: any){}
}

export class Delete implements Action {
	readonly type = DELETE;
	
	constructor(public payload: any){}
	
}

export class Modified implements Action {
	readonly type = MODIFIED;
	
	constructor(public payload: any){}
}

export class Query implements Action {
	readonly type = QUERY;
	
	
}

export class Update implements Action {
	readonly type = UPDATE;
	
	constructor(
		public id: any,
		public changes: Partial<task>
	){}
}

export class Success implements Action {
	readonly type = SUCCESS;
}



export type All
	= Add
	| Delete
	| Modified
	| Update
	| Query
	| Success;