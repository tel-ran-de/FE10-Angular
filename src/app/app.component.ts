import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  greeting = 'Hello, ';
  specificName = '';
  initialValue = 'World';

  clickHandler(event: KeyboardEvent, name: string): void {
    console.log(event);
    this.specificName = name;
  }
  // update specific name after Enter key is pressed
}
