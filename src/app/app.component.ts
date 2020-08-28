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

  keyupHandler(event: KeyboardEvent, name: string): void {
    if (event.key === 'Enter'){
      // console.log(event);
      this.specificName = name;
    }
  }
  // update specific name after Enter key is pressed
}
