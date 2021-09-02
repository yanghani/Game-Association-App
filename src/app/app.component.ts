import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Association';
  
  next(){
  var wordlists = [
    'tentdress',
    'jeans',
    'raincoat',
    'trolley',
    'supermarket',
    'beer',
    'cigarettes',
    'fish',
    'sweetcorn',
    'tomato',
    'carrot'
  ]
  let easylevel = wordlists[Math.floor(Math.random()* wordlists.length)]
  console.log(easylevel)
  
}
}
