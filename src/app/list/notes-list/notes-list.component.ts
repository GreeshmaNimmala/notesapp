import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/notes.module';
import { NoteServiceService } from 'src/app/shared/note-service.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes:Note[]=new Array<Note>();
  filterNote:string;


  constructor(private noteService:NoteServiceService) { }

  ngOnInit(){
    this.notes=this.noteService.getAll();
  }

  delete(id:number){
    this.noteService.delete(id);
  }

}
