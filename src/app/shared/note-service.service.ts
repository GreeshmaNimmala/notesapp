import { Injectable } from '@angular/core';
import { Note } from './notes.module';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  notes:Note[]=new Array<Note>();

  constructor() { }

  getAll(){
    return this.notes;
  }

  get(id:number){
    return this.notes[id];
  }

  getId(note:Note){
    return this.notes.indexOf(note)
  }

  add(note:Note){
    let item=this.notes.push(note);
    let notesLength=item-1;
    return notesLength;
  }
  update(id:number,title:string,message:string){
    let note=this.notes[id];
    note.title=title;
    note.message=message;
  }

  delete(id:number){
    this.notes.splice(id,1);
  }
}
