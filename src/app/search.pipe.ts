import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './shared/notes.module';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:Note[], sName:string): any[] {
    if(!value){
      return null;
    }
    if(!sName){
      return value;
    }
      let relevantNotes=value.filter(note=>{
        if(note.message.toLowerCase().includes(sName) || note.title.toLowerCase().includes(sName)){
          return true;
        }
        return false;
      })
    return relevantNotes;
    }

}
