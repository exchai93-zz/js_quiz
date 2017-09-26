(function(){
  'use strict';

  // 6 dimension catories
  var categories = ["Adaptive", "Integrity", "Collaborative", "Result", "Customer", "Detail"];
  var dimensions = [
    {
      "Adaptive": [
                  "I am innovative",
                  "I take risks",
                  "I am willing to experiment",
                  "I am fast moving",
                  "I am quick to take advantage of opportunities",
                  "I don't like to be constrained by rules",
                  "I am flexible",
                  "I adjust easily to changing environments",
                  "I welcome change",
                  "I am a curious person"
                ],
      "Integrity" : [
                  "I have a high sense of integrity",
                  "I have high ethical standards",
                  "I am honest",
                  "I respect individuals",
                  "I am fair",
                  "I am trustworthy",
                  "I always tell the truth",
                  "I lead by example",
                  "I am not easily offended",
                  "I always try to do the right thing"
                ],
      "Collaborative" : [
                  "I am team oriented",
                  "I am cooperative",
                  "I am supportive",
                  "I work in collaboration with others",
                  "I avoid conflicts",
                  "I am always happy to share knowledge",
                  "I am a good communicator",
                  "I share responsibilities",
                  "I like working together with others",
                  "I am always available to help out a colleague in need"
                ],
      "Result" : [
                "I am results oriented",
                "I have high expectations for performance",
                "I am achievement oriented",
                "I reach my goals",
                "I am ambitious",
                "I can sometimes be aggresive",
                "I set clear goals",
                "I am good at identifying effective processes",
                "I am action oriented",
                "I focus on the outcome, rather than the process"
              ],
    "Customer" : [
                "I am customer oriented",
                "I listen to customers",
                "I watch the markets carefully",
                "I value our clients",
                "I respond promptly to clients",
                "I always put customer needs first",
                "I work to satisfy our customers",
                "I put the customer's requirements ahead of anything else",
                "I highly value customer feedback",
                "I base my decisions on what our customers need & want"
              ],
    "Detail" : [
                "I pay attention to detail",
                "I put emphasis on quality",
                "I am precise",
                "I focus on rules",
                "I am careful",
                "I see patterns in data",
                "I am analytical ",
                "I am good at understanding cause-and-effect relationships",
                "I am accurate in my work",
                "I notice mistakes quickly"
              ],
    }
  ];

  function buildAssessment() {}
    // Store HTML output
    var output = [];
    // 30 questions in the assessment
    var numberOfQuestions = 30;

    // Randomly shuffle an array
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    function getTwoDimensions() {
      var randomCategories = shuffle(categories).slice(0,2);
      return randomCategories;
    }
    console.log(getTwoDimensions());

    randomCategories.forEach(function(category) {
      var statementss = dimensions[category];
      var randomStatement = shuffle(statements)[0];
      return randomStatment;
    });

    console.log(randomStatement);

    // dimensions.forEach(function(currentQuestion, questionNumber) => {
    //   var answers = [];
    //   for(letter in currentQuestion.answers) {
    //     answers.push(
    //       `<label>
    //       <input id='radioButton' type='radio'
    //       name='question${questionNumber}'
    //       value='${letter}'
    //       data-dimension='${dimension}'>
    //       ${letter} :
    //       ${currentQuestion.answers[letter]}
    //       </label>`
    //     );
    //   }
    // }

    // Add question and answers to the output
  //   output.push(
  //     `<div class='slide'>
  //     <div class='question'>Pick theoption that describes you best:</div>
  //     <div class='answers'> ${answers.join('')} </div>
  //     </div>`
  //     );
  //   });
  //   assessmentContainer.innerHTML = output.join('');
  // }


    // For each question
    // Pick to key values to generate each question - pop 2 values off the options hash

    // iterations based on a number
//
//     questions.forEach(
//       (currentQuestion, questionNumber) => {
//         // Store the list of answer choices
//         const answers = [];
//         // For each available answer
//         for(letter in currentQuestion.answers) {
//           // Add an HTML radio button
//           answers.push(
//             `<label>
//             <input id='radioButton type='radio'
//             name='question${questionNumber}'
//             value='${letter}'
//             data-dimension='${dimension}'>
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
//
//         ${currentQuestion.dimension[dimension]}
//         // pass the dimenion to the value of a radio button - in the name or in a data attribute i.e. data-dimension
//         // $(["data-dimension='adaptive']:selected").length
//
//         // Add question and answers to the output
//         output.push(
//           `<div class='slide'>
//           <div class='question'>Pick the option that describes you best:</div>
//           <div class='answers'> ${answers.join('')} </div>
//           </div>`
//         );
//       });
//       assessmentContainer.innerHTML = output.join('');
//     }
//
//
//   function showResults() {
//     const answerContainers = assessmentContainer.querySelectorAll('.answers');
//
//     questions.forEach( (currentQuestion, questionNumber) => {
//       // keep track of number of times each dimension is chosen
//       let numAdaptive = 0;
//       let numIntegrity = 0;
//       let numCollaborative = 0;
//       let numResult = 0;
//       let numCustomer = 0;
//       let numDetail = 0;
//
//       questions.forEach((currentQuestion, questionNumber) => {
//         const answerContainer = answerContainers[questionNumber];
//         const selector = 'input[name=question'+questionNumber+']:checked';
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//       });
//
//       // need to increment dimension score by one if chosen
//       // match the answer with the dimension
//       if(userAnswer===currentQuestion.dimensionA){
//
//       }
//     });
//
//     // Show number of times dimension chosen by the user
//     resultsContainer.innerHTML = 'Adaptive: ' + numAdaptive + 'Integrity: ' + 'numIntegrity'
//     + 'Collaborative: ' + numCollaborative + 'Result: ' + numResult + 'Customer: ' + numCustomer
//     + 'Detail: ' + numDetail
//   }
//
//   // $(["data-dimension='adaptive']:selected").length
//
//   // pagination
//   const previousButton = document.getElementById('previous');
//   const nextButton = document.getElementById('next');
//   const slides = document.querySelectorAll('.slide');
//   let currentSlide = 0;
//
//   function showSlide(n) {
//     slides[currentSlide].classList.remove('active-slide');
//     slides[n].classList.add('active-slide');
//     currentSlide = n;
//     if(currentSlide === 0) {
//       previousButton.style.display = 'none';
//     }
//     else {
//       previousButton.style.display = 'inline-block';
//     }
//     if(currentSlide ==== slides.length-1) {
//       nextButton.style.display = 'none';
//       submitButton.style.display = 'inline-block';
//     }
//     else {
//       nextButton.style.display = 'inline-block';
//       submitButton.style.display = 'none';
//     }
//   }
//   showSlide(0);
//
//   function showNextSlide() {
//     showSlide(currentSlide + 1);
//   }
//
//   function showPreviousSlide() {
//     showSlide(currentSlide - 1);
//   }
//
//   previousButton.addEventListener('click', showPreviousSlide);
//   nextButton.addEventListener('click', showNextSlide);
//
//   const assessmentContainer = document.getElementById('assessment');
//   const resultsContainer = document.getElementById('results');
//   const submitButton = document.getElementById('submit');
//
//   // Display quiz
//   buildAssessment();
//
//   // On submit, show results
//   submitButton.addEventListener('click', showResults);
//
})();
