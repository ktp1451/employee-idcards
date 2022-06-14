import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class CardFancyExample implements OnInit { //always make sure to have the "implements OnInit" after the object name
  //create an array of people
  users=[
    {
      name: "Albus Dumbledore",
      occupation: "Headmaster of Hogwarts",
      age: 112,
      hobbies: "Knitting"
    },
    {
      name: "Harry Potter",
      occupation: "Student at Hogwarts",
      age: 16,
      hobbies: "Quidditch"
    },
    {
      name: "Arthur Weasley",
      occupation: "MOM : Misuse of Muggle Artefacts Office",
      age: 55,
      hobbies: "Collector"
    },
  ]
  //create a card for every person by using ngFor in HTML file 
  //center card on page vertically and horizontally using flexbox in CSS file 
  //BONUS implement ngIf in HTML file
  ngOnInit(): void {
    
  }
}