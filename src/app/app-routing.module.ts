import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{path: '', component: HomeComponent, children:[{
    path:'', component: NotesListComponent
}
]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
