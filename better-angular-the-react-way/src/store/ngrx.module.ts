import { NgModule } from '@angular/core'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';

import {
  reducers,
  getInitialState,
  TodoActions
} from './index'

@NgModule({
  imports: [
    StoreModule.forRoot(reducers,{
      initialState: getInitialState
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  declarations: [],
  providers: [
    TodoActions
  ]
})
export class NgRxModule {}
