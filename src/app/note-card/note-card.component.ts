import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title:string;
  @Input() message:string;
  @Input() link:string;
  @Output('delete') deleteNote:EventEmitter<void>=new EventEmitter<void>();

  @ViewChild('truncator',{static:true})truncator:ElementRef<HTMLElement>;
  @ViewChild('bodyText',{static:true})bodyText:ElementRef<HTMLElement>;

  constructor(private renderer:Renderer2) { }

  ngOnInit() {

    let style=window.getComputedStyle(this.bodyText.nativeElement,null);
    let viewableHeight=parseInt(style.getPropertyValue("height"),10);
    if(this.bodyText.nativeElement.scrollHeight>viewableHeight){
      this.renderer.setStyle(this.truncator.nativeElement,'display','block')
    }
    else{
      this.renderer.setStyle(this.truncator.nativeElement,'display','none');
    }

  }

  onDelete(){
    this.deleteNote.emit();
  }

}
