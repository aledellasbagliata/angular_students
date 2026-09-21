import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student
{

    MALE_COLOR : string = 'lightblue';
    FEMALE_COLOR : string = 'pink'


  students : any[] = [

    { name: "Pippo", city: "Topolinia", gender: "M", isPresent: true},
    { name: "Pluto", city: "Topolinia", gender: "M", isPresent: false},
    { name: "Paperina", city: "Paperopoli", gender: "F", isPresent: true},
    { name: "Gastone", city: "Paperopoli", gender: "M", isPresent: true},
    { name: "Minnie", city: "Topolinia", gender: "F", isPresent: false}

  ];

  getStyle(student : any)
  {
    return {
      'backgroundColor' : student.gender == 'F' ? this.FEMALE_COLOR : this.MALE_COLOR,
      'textDecoration' : student.isPresent ? 'none' : "underline",
      'fontWeight' : student.isPresent ? 'normal' : 'bold'
    }
  }

}
