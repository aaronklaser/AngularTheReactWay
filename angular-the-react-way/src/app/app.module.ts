import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRxModule } from '../store/ngrx.module'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './containers/add-todo/add-todo.component';
import { VisibleTodoListComponent } from './containers/visible-todo-list/visible-todo-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinkComponent } from './components/link/link.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FilterLinkComponent } from './containers/filter-link/filter-link.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    VisibleTodoListComponent,
    FooterComponent,
    LinkComponent,
    TodoComponent,
    TodoListComponent,
    FilterLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgRxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
