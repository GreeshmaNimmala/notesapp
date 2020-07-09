import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteServiceService } from 'src/app/shared/note-service.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/shared/notes.module';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note:Note;
  noteId:number;
  editMode:boolean;


  constructor(private noteService:NoteServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.note=new Note();
      if(params.id){
      this.note=new Note();
        this.note=this.noteService.get(params.id);
        this.noteId=params.id;
        // this.id = +params['id'];
        // this.editMode = params['id'] != null;
      }
      else{
        this.editMode=true;
      }


    });
  }

  onSubmit(form:NgForm){
    if(this.editMode){
      this.noteService.add(form.value);
    }
    else{
      this.noteService.update(this.noteId,form.value.title,form.value.message);
    }
    this.router.navigateByUrl('/');
    //console.log(form.value);
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
