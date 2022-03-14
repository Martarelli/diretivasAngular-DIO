import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any>{
    let peopleArray = [
      {
        firstName: 'Renan',
        lastName: 'Martarelli',
        age: 31
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 45
      },
      {
        firstName: 'João',
        lastName: 'Pereira',
        age: 23
      },
      {
        firstName: 'Ivonaldo',
        lastName: 'Soares',
        age: 26
      },
    ]

    return of(peopleArray)
  }
}
