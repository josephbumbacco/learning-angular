import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();

  newContent: Content;

  constructor() {

    this.newContent = {
      id: 0,
      author: '',
      imgUrl: '',
      type: '',
      title: '',
      body: '',
      tags: ['']
    };
  }

  ngOnInit(): void {
    this.newContentEvent.emit(this.newContent);
  }

   addContent(): void{
     console.log('Event Emitted!', this.newContent.title);
     this.newContent.id = +this.newContent.id;
     this.newContentEvent.emit(this.newContent);
   }

}
