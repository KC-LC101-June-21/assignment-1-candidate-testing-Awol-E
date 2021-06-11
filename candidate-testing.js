const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //

let candidateName= "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question= "Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";

let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer === 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  'What is the minimum crew size for the ISS? '
  ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers =[];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your Name? ");
  console.log("Hello, ",candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for(let j=0; j < questions.length; j++) {
    candidateAnswers[j] = input.question(questions[j] + '\n' + "Your Answer: ");
    //candidateAnswers[j] = input.question(questions[j])
    //console.log("Your Answer: "+ candidateAnswers[j])
    console.log("Correct Answer: "+ correctAnswers[j])
    console.log("\n");  
  }
  //console.log(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
 for(j=0; j < questions.length; j++) {
  if (candidateAnswers[j].toLowerCase() === correctAnswers[j].toLocaleLowerCase()) 
 {
   let i = j + 1;
    console.log("Your answer is Correct for question # " + i);
  } else {
    i = j + 1;
    console.log("Your answer is Wrong for question # " + i);
  }
 }
  let grade;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

//Part 2: Multiple Questions

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};