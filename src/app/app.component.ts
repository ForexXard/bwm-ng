import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  component = "i am a component value"

  clickHandler(){
    alert("i am clicked")
  }
}
