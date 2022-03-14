import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ]


  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => this.pessoas = people)
  }
}
