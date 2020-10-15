import { Component, Input } from '@angular/core';
import { Content } from "./helper-files/content-interface";
import { ContentListComponent } from "./content-list/content-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   @Input() thing: Content;
  @Input()thingList: ContentListComponent[];

}
