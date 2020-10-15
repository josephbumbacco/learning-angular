import {Component, Input, OnInit} from '@angular/core';
import {Content, ContentList} from '../helper-files/content-interface';

@Component({
  selector: 'contentlist',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() thing: Content;
  thingList: Content[];
  constructor() {

     var thingList: Content[] = [

       {
         id: 0,
         author: 'Joe B',
         imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
         title: 'Information 1',
         body: 'This is Information 1',
         tags: ['Info 1']
       },
       {
         id: 1,
         author: 'Joe B',
         imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
         title: 'Information 2',
         body: 'This is Information 2',
         tags: ['Info 2']
       },
       {
         id: 2,
         author: 'Joe B',
         imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
         title: 'Information 3',
         body: 'This is Information 3',
         tags: ['Info 3']
       },
       {
         id: 3,
         author: 'Joe B',
         imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
         title: 'Information 4',
         body: 'This is Information 4',
         tags: ['Info 4']
       },
       {
         id: 4,
         author: 'Joe B',
         imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
         title: 'Information 5',
         body: 'This is Information 5',
         tags: ['Info 5']
       }
     ];
  }

  ngOnInit(): void {
  }
}


