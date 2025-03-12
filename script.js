
const questionSets = [{
  question: 'You enter a room with one match, a candle, a fireplace, and a gas lamp. What should you light first?',
  option: ['The candle', 'The fireplace', 'The gas lamp', 'The match'],
  correctAnswer: 'The match'
},
  {
  question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
  option: ['A cloud', 'An echo', 'A shadow', 'A dream'],
  correctAnswer: 'An echo'
},
{
  question: 'What has to be broken before you can use it?',
  option: ['An egg', 'A lock', 'A mirror', 'A rule'],
  correctAnswer: 'An egg'
},
{
  question: 'I am taken from a mine, and shut inside a wooden case. Used by many, but seen by few. What am I?',
  option: ['A diamond', 'A pencil', 'A key', 'A matchstick'],
  correctAnswer: 'A pencil'
},
{
  question: 'I have keys but no locks. I have space but no room. You can enter but can’t go outside. What am I?',
  option: ['A computer keyboard', 'A piano', 'A map', 'A book'],
  correctAnswer: 'A computer keyboard'
}]

// const questionSet = {
//   question: 'A farmer has 17 sheep, and all but 9 run away. How many sheep does the farmer have left?',
//   option: [8, 9, 17, 0],
//   correctAnswer: 9
// }

let score=0;
let currQuestion=0;

function quizgame(){
  const startScreen = document.getElementsByClassName('startQuiz');
  // console.log(startScreen[0]);
  startScreen[0].innerHTML = '';
  
  if(currQuestion<questionSets.length){
    newQuestions(questionSets[currQuestion]);
    currQuestion++;
  } 
}

function newQuestions(object){
  const  questionElem = document.getElementById('Question');
  questionElem.classList.add('questionStyle');
  questionElem.innerHTML=object.question;
  const optionElem = document.getElementById("Options");
  let optionSet = shuffleOptions(object.option);
  optionSet.forEach((element) => {
    const optionDiv = document.createElement('div')
    optionDiv.classList.add('answerOption');
    optionDiv.textContent= element;
    optionDiv.addEventListener('click' , () => {
      if(optionDiv.textContent === String(object.correctAnswer)){
        score+=1;
      }else{
        score-=0.25;
      }
      const showscore  = document.getElementById('score');
      showscore.classList.add('score');
      showscore.textContent = `Your score ${score}`;
      optionElem.innerHTML="";
      questionElem.innerHTML="Quiz Completed";
      quizgame();
    });
    optionElem.appendChild(optionDiv);

  });
}
function shuffleOptions(array){
  let currElem = 0;
  // console.log('its working');
  let size = array.length;
  while(currElem<size){
    let randomIndex = Math.floor(Math.random()*size);
    [array[currElem], array[randomIndex]] = [array[randomIndex], array[currElem]];
    currElem+=1;
  }
  return array;
}

