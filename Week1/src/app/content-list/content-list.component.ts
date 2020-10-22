import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'contentlist',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  public listContent = new Array <Content>();
  htmlOutput: string;

          content1: Content = {
              id: 0,
            title: 'Idea #1',
              author: 'Joseph Bumbacco',
              imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
              body: 'This is the Body of Idea Number 1',
              type: 'Innovations',
              tags: ['Info 1']
               };
          content2: Content = {
            id: 1,
            title: 'Idea #2',
            author: 'Joe B',
            imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
            body: 'This is the Body of Idea Number 2',
            type: 'Ideas',
            tags: ['Info 2']
               };
        content3: Content =     {
               id: 2,
               author: 'Joe B',
               imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
               title: 'Information 3',
               body: 'This is Information 3',
                type: 'Ideas',
               tags: ['Info 3']
             };
        content4: Content =    {
               id: 3,
               author: 'Joe B',
               imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
               title: 'Information 4',
               body: 'This is Information 4',
                type: 'Innovations',
               tags: ['Info 4']
             };
        content5: Content =    {
               id: 4,
               author: 'Joe B',
               imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
               title: 'Information 5',
               body: 'This is Information 5',
                type: 'Innovations',
               tags: ['Info 5']
             };
constructor() {
  this.listContent.push(this.content1, this.content2, this.content3, this.content4, this.content5)
}


  input(title: string): void {
    //this.listContent.forEach(content => content.title === title) {
    for (let content of this.listContent){
        if(content.title == title){
          console.log(true);
          return;
        }
    }
    console.log(false);
  }


  public printInfo(content: Content): void{
  console.log(content.id)
  }

  ngOnInit(): void {
  }
}


