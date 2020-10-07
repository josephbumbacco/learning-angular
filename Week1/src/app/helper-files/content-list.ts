import { Content } from './content-interface';

export class ContentList {

  static contentCount = 0;

  items: Content[];

  constructor(item: Content) {
    this.items[0] = item;
    this.increaseCount();
  }

  getitems(): Content[]{
    return this.items;
  }

  increaseCount(): number {
    return ++ContentList.contentCount;
  }
}
