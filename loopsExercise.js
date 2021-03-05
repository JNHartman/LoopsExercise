// 1. Use a For Loop to count from 1 to 7 and have each number display in the console/terminal (You will need a console log for this)

  for (i = 1; i <= 7; i++){
    console.log(i);
  }
console.log("======");

// 2. Use a For Loop to count from 5 to 25 by 4 (Ex: 5, 9, 13, etc.) and have each number display in the console/terminal (You will need a console log for this)

for (i = 5; i <= 25; i+=4){
    console.log(i);
}
console.log("======");

// 3a. Create a const variable named wizards and set the value of the variable to the following array items "Harry Potter", "Hermione Granger", and "Ron Weasley"

const wizards = [
    "Harry Potter", 
    "Hermione Granger", 
    "Ron Weasley"
];

// 3b. Use a For Of Loop to have each name display in the console/terminal (You will need a console log for this)

for (char of wizards){
    console.log(char);
  }
console.log("======");

// 4a. Create a let variable called harryPotterMovies and set the value to 0 (That's a zero not O).

let harryPotterMovies = 0;

// 4b. Create a While Loop that adds 1 to the harryPotterMovies variable each time through the while loop until the harryPotterMovies variable has a value of 8.

while (harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
  }

  console.log("BONUS SECTION=============================================");
// 5a. Create a const variable named hogwartsHouses and set the value of the variable to the following array items "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin".

const hogwartsHouses = `Gryffindor Hufflepuff Ravenclaw Slytherin`; // I may have cheated on this question?

// 5b. Using nested For Of Loops, have each house name displayed in the console/terminal one letter at a time (You will need a console log for this).
for (char of hogwartsHouses){
    console.log(char);
}

// 6a. Create a const variable named quote and set the value of the variable to the following array items "Yer", "A", "Wizard", "Harry".

const quote = ["Yer", "A", "Wizard", "Harry"]

// 6b. Using a loop (You can decide which one you want to use), have the message "Yer A Wizard Harry" display on ONE line in the console/terminal (NOTE: Must have spaces between the words when it is displayed. Also, You will need a console log for this)(HINT: You will need to create another variable)

// for (catergory of quote){
//     for (house of catergory){
//         console.log(quote);
//     }
// }

// for (i = 0; i < topics.length; i++){
//     console.log(`${i + 1}. ${topics[i]}`);
//   }