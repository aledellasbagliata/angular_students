import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student
{

  students : any[] = [
    
    { name: "Pippo", city: "Topolinia", gender: "M", isPresent: true},
    { name: "Pluto", city: "Topolinia", gender: "M", isPresent: false},
    { name: "Paperina", city: "Paperopoli", gender: "F", isPresent: true},
    { name: "Gastone", city: "Paperopoli", gender: "M", isPresent: true},
    { name: "Minnie", city: "Topolinia", gender: "F", isPresent: false}
    
  ]

}
