// Welcome to your first assignment.
const input = require('readline-sync');

let name = input.question('What is your name?');
console.log('Welcome, ' + name + '. We have a few questions for you. \n');
let quizQuestion = ['True or false: 5000 meters = 5 kilometers.', '(5 + 3)/2 * 10 = ?', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', 'Who was the first American woman in space?', 'What is the minimum crew size for the International Space Station (ISS)?'];
let quizAnswer = ['True', '40', 'Trajectory', 'Sally Ride', '3'];
let grade = 0;


for (let i = 0; i < quizQuestion.length; i++) {
    
    quiz = input.question(quizQuestion[i]);
    console.log(`Your Answer: ${quiz}`);
    console.log(`Correct Answer: ${quizAnswer[i]} \n`);
    
  if (quiz.toUpperCase() == quizAnswer[i].toUpperCase()) {
  grade++;
  }
  
} 

let gradePercentage = (grade / 5) * 100;

console.log(`>>> Overall Grade: ${gradePercentage}% (${grade} of 5 responses correct) <<<`)

if (gradePercentage > 80) {
  console.log('Status: PASSED');
} else {
  console.log('Status: FAILED');
}