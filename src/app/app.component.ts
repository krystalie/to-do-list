import { Component } from '@angular/core';
import { task }from './list';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ListActions from './list.action';
import * as fromTask from './list.reducer';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	items$ : Observable<any>;

	


	constructor (private store: Store<fromTask.State>) {
			
	}


//Read Function
	ngOnInit(){
		this.items$ = this.store.select(fromTask.selectAll);
		this.store.dispatch( new ListActions.Query() )
	}





//Update Function
	update(id, status){
		this.store.dispatch(new ListActions.Update(id, {status}))
	}
}



