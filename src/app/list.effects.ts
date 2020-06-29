import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from } from 'rxjs';
import { map , mergeMap, switchMap } from 'rxjs/operators';


import { task } from './list'
import * as ListActions from './list.action'


@Injectable()
export class ListEffects {
	
	constructor(private actions: Actions, private db: AngularFirestore) {}
	
	
	@Effect()
	query: Observable<Action> = this.actions.pipe(
	ofType(ListActions.QUERY),
	switchMap(action => {
		console.log(action)
		return this.db.collection('tasks', ref => {
			return ref.where('status', '==', 'no')
		}).stateChanges()
	}),
	mergeMap(actions => { //actions [{type: added, payload: data},...]
		console.log(actions)
		return actions}),
	map(action => {
		console.log(action.payload.doc.data() as [])
		return {
			type: `[task] ${action.type}`,
			payload: {
				...action.payload.doc.data() as [],
				id: action.payload.doc.id,
			}
		}
	}
	))

	
	
	
	@Effect()
	update: Observable<Action> = this.actions.pipe(
	ofType(ListActions.UPDATE),
	map((action: ListActions.Update) => action),
	switchMap(data => {
		const ref = this.db.doc(`tasks/${data.id}`)
		return from(ref.update(data.changes))
	}),
	map(() => new ListActions.Success())
	)
}