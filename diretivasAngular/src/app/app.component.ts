import { PeopleService } from './shared/services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  count:number = 0;
  nome:string = 'Renan Martarelli';
  text:string = '';

  pessoas = []

  constructor(private peopleService: PeopleService){

  }

  ngOnInit(): void {
      console.log(this.pessoas)
      let interval = setInterval(() => {
        this.count++;
        if(this.count === 10){
          clearInterval(interval)
        }
      }, 1000)
  }

  clicou(nome:string): void {
    console.log('Clicou em mim', nome);
  }
}
