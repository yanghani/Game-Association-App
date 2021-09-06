import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Association';
  
  const(){
    let btnRandom = document.querySelector('button');
    let result = document.querySelector('h1');

    let easy = ['beer', 'dog', 'carrot', 'ocean'];
    function getRandomNumber(min: number, max: number){
      let step1 = max - min + 1;
      let step2 = Math.random() * step1;
      let result = Math.floor(step2) + min;

      return result;
    }

    btnRandom.addEventListener('click', () =>{
         let index = getRandomNumber(0, easy.length-1);
         result.innerText = easy[index];
    });
  }
  

  
  next(){          
   
  }
  
  
  
  
  
  
}
