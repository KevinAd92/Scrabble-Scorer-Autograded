const input = require('readline-sync');

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer (word) {
    word = word.toUpperCase();
    let letterPoints = "";

    for(let i = 0; i < word.length; i++) {
        for(const pointValue in oldPointStructure) {
            if(oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }
        }
    }
    return letterPoints;
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
    console.log(`Let's play some scrabble!\n `);
    let prompt = input.question(`Enter a word to score:`);
    return prompt;
};

function simpleScorer (word) {
  return word.length;
};


function vowelBonusScorer(word) {
  let vowels = ['A','E','I','O','U'];
  let vowelPoints = 3;
  let vowelScore = 0;
  let wordArray =[];
  let vowelWord = word.toUpperCase();
  wordArray = vowelWord.split('');
    for (let i = 0; i < word.length; i++){
        if (vowels.includes(wordArray[i])){
            vowelScore = vowelPoints + vowelScore;
        } else {
            vowelScore = vowelScore + 1;
        }
        }
    wordArray.join('')
    vowelWord.toUpperCase();
    return vowelScore;  
};


function scrabbleScorer(word) {
   let score = 0; 
   for ( let i = 0; i <word.length; i++){
    score += newPointStructure[word[i].toLowerCase()]
   }
   return score;
};

  const scoringAlgorithms = [
  {
    name: "Simple Score",
      description: "Each letter is worth 1 point.",
      scorerFunction: simpleScorer
  },{
    name: "Bonus Vowels",
      description: "Vowels are 3pts, consonants are 1 pt.",
      scorerFunction: vowelBonusScorer
  },{
    name: "Scrabble",
     description: "The traditional scoring algorithm.",
      scorerFunction: scrabbleScorer
  }
  ];

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n");
  for (let i = 0; i < scoringAlgorithms.length; i++) {
     let option = scoringAlgorithms[i];
     console.log(i + " - " + option["name"]+": " + option["description"]);
  }
   let choice = Number(input.question('Enter 0, 1, or 2:'))
   return scoringAlgorithms[choice];
  };

function transform(oldPointStructure) {
  // Loops through each array inside oldPointStructure
  let newPtObject = {}; // empty array
  for(let key in oldPointStructure) {
    for(let i = 0; i < oldPointStructure[key].length; i++) {
      newPtObject[oldPointStructure[key][i].toLowerCase()] = Number(key);
    }
  }
  return newPtObject;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  let word = initialPrompt();
  let scorer = scorerPrompt().scorerFunction;
  let score = scorer(word);
  console.log(`Score for '${word}': ${score}\n`)
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};