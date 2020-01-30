import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-project';

  currentExample = 2 ;

  setExample(value: number) {
    this.currentExample = value;
  }
  
}
