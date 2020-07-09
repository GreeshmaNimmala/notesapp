import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './list/layout/layout.component';
import { NotesListComponent } from './list/notes-list/notes-list.component';
import { NoteDetailsComponent } from './list/note-details/note-details.component';


const routes: Routes = [
  {
    path:'', component:LayoutComponent,children:[
      {
        path:'',component:NotesListComponent
      },
      {
        path:'new',component:NoteDetailsComponent
      },
      {
        path:':id',component:NoteDetailsComponent
      }
    ]

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
