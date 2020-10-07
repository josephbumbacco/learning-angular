import { Component, OnInit } from '@angular/core';


import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']

})
export class ContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

const informationOne: Content = {
  id: 0,
  author: 'Joe B',
  imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
  title: 'Information 1',
  body: 'This is Information 1',
  tags: ['Info 1']
};

const informationTwo: Content = {
  id: 2,
  author: 'Joe B',
  imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
  title: 'Information 2',
  body: 'This is Information 2',
  tags: ['Info 2']
};

const informationThree: Content = {
  id: 3,
  author: 'Joe B',
  imgUrl: 'https://az601583.vo.msecnd.net/app-content/posts/106/2020/06/13/inspirehub-fb8edc4ff85f4906992b7fa31341bd04-jpg_1600x900_01_06_05_5949.jpg',
  title: 'Information 3',
  body: 'This is Information 3',
  tags: ['Info 3']
};

let listOfContentsOne: ContentList;
listOfContentsOne = new ContentList(informationOne);
console.log(listOfContentsOne.items[0]);

let listOfContentsTwo: ContentList;
listOfContentsTwo = new ContentList(informationTwo);
console.log(listOfContentsTwo.items[1]);

let listOfContentsThree: ContentList;
listOfContentsThree = new ContentList(informationThree);
console.log(listOfContentsThree.items[2]);
