import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './shared/component/todo-dashboard/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/component/todo-dashboard/todo-form/todo-form.component';
import { MaterialModule } from './shared/module/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDashboardComponent } from './shared/component/task-dashboard/task-dashboard.component';
import { TaskListComponent } from './shared/component/task-list/task-list.component';
import { TaskFormComponent } from './shared/component/task-form/task-form.component';
import { ReminderDashboardComponent } from './shared/component/reminder-dashboard/reminder-dashboard.component';
import { ReminderListComponent } from './shared/component/reminder-dashboard/reminder-list/reminder-list.component';
import { ReminderFormComponent } from './shared/component/reminder-dashboard/reminder-form/reminder-form.component';
import { NoteDashboardComponent } from './shared/component/note-dashboard/note-dashboard.component';
import { NoteListComponent } from './shared/component/note-dashboard/note-list/note-list.component';
import { NoteFormComponent } from './shared/component/note-dashboard/note-form/note-form.component';
import { AlertDashboardComponent } from './shared/component/alert-dashboard/alert-dashboard.component';
import { AlertListComponent } from './shared/component/alert-dashboard/alert-list/alert-list.component';
import { AlertFormComponent } from './shared/component/alert-dashboard/alert-form/alert-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoFormComponent,
    TaskDashboardComponent,
    TaskListComponent,
    TaskFormComponent,
    ReminderDashboardComponent,
    ReminderListComponent,
    ReminderFormComponent,
    NoteDashboardComponent,
    NoteListComponent,
    NoteFormComponent,
    AlertDashboardComponent,
    AlertListComponent,
    AlertFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
