import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './components/todo/todo.component';
import { DogComponent } from './components/dog/dog.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    { path: '', component: TodoComponent },
    { path: 'todos', component: TodoComponent },
    { path: 'dogs', component: DogComponent },
    { path: 'createUser', component: UserComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
