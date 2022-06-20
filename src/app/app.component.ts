import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class CardFancyExample implements OnInit { //always make sure to have the "implements OnInit" after the object name
  //create an array of people
  users=[
    {
      name: "Albus Dumbledore",
      occupation: "Headmaster of Hogwarts",
      house: "Gryffindor",
      age: 112,
      hobbies: "Knitting",
      patronus: "Phoenix",
      avatarImg: "dumbledoreAvatar",
      mainImg: "assets/images/DD-mainimg.webp"
    },
    {
      name: "Newt Scamander",
      occupation: "MOM : Magizoologist, Beast Division",
      house: "Hufflepuff",
      age: 36,
      hobbies: "Creature Research",
      patronus: "Kelpie",
      avatarImg: "assets/images/newt-profile",
      mainImg: "assets/images/newt-main.jpeg"
    },
    {
      name: "Gilderoy Lockhart",
      occupation: "Author",
      house: "Ravenclaw",
      age: 42,
      hobbies: "Travel",
      patronus: "Non-corporeal",
      avatarImg: "assets/images/lockhart-profile",
      mainImg: "assets/images/lockhart-mainimg.jpeg.crdownload"
    },
    {
      name: "Horace Slughorn",
      occupation: "Potions Master at Hogwarts",
      house: "Slytherin",
      age: 75,
      hobbies: "Throwing Parties",
      patronus: "Fish",
      avatarImg: "assets/images/horace-profile",
      mainImg: "assets/images/horace-main.jpeg"
    }
  ]

  //create a card for every person by using ngFor in HTML file 
  //center card on page vertically and horizontally using flexbox in CSS file 
  //BONUS implement ngIf in HTML file
  //COLUMN GAP AND ROW GAP - css fun trick
  //ngclass to implement photos 
  ngOnInit(): void {
    
  }

  sayMyName(name: string){
    return(`${name} is a developer`);
  };

  onClick(){
    console.log(this.sayMyName("Katie"));
  }
  // TODO: ADD AN ONCLICK BUTTON TO MODAL
  // TODO: WHEN YOU CLICK THIS BUTTON CREATE AN OBJECT MAP THAT PRINTS ALL THE CHARACTERS DETAILS IN THE CONSOLE 
  //2 METHODS OF MAPPING IN ANGULAR: 1) HTML 2) JS
}