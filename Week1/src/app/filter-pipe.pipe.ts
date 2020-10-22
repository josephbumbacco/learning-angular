import { Pipe, PipeTransform } from '@angular/core';
import {Content, ContentList} from './helper-files/content-interface';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(contentList: Array <Content>, filterType: string): Array <Content> {
    return contentList.filter(content => content.type.includes(filterType));
  }

}
