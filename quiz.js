(function(){
  function buildAssessment() {}
    const output = [];

    questions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];

        for(letter in currentQuestion.answers) {

          answers.push(
            `<label>
            <input id='radioButton type='radio'
            name='question${questionNumber}'
            value='${letter}'
            data-dimension='${dimension}'>
            ${letter} :
            ${currentQuestion.answers[letter]}
            ${currentQuestion.dimension[dimension]}
            </label>`
          );
        }
        // pass the dimenion to the value of a radio button - in the name or in a data attribute i.e. data-dimension
        // $(["data-dimension='adaptive']:selected").length

        output.push(
          `<div class='slide'>
          <div class='question'> ${currentQuestion.question} </div>
          <div class='answers'> ${answers.join('')} </div>
          </div>`
        );
      });
      quizContainer.innerHTML = output.join('');
    }


  function showResults() {
    const answerContainers = assessmentContainer.querySelectorAll('.answers');

    questions.forEach( (currentQuestion, questionNumber) => {
      // keep track of number of times each dimension is chosen
      let numAdaptive = 0;
      let numIntegrity = 0;
      let numCollaborative = 0;
      let numResult = 0;
      let numCustomer = 0;
      let numDetail = 0;

      questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question'+questionNumber+']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      });

      // need to increment dimension score by one if chosen
      // match the answer with the dimension
      if(userAnswer===currentQuestion.dimensionA){

      }
    });

    // Show number of times dimension chosen by the user
    resultsContainer.innerHTML = 'Adaptive: ' + numAdaptive + 'Integrity: ' + 'numIntegrity'
    + 'Collaborative: ' + numCollaborative + 'Result: ' + numResult + 'Customer: ' + numCustomer
    + 'Detail: ' + numDetail
  }

  $(["data-dimension='adaptive']:selected").length

  const assessmentContainer = document.getElementById('assessment');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const questions = [
    {
      question: "Pick the option that describes you best:",
      options: {
        a: "I am innovative",
        b: "I have a high sense of integrity"
      },
      dimensionA: "Adaptive",
      dimensionB: "Integrity"
    },
    {
      question: "Pick the option that describes you best:",
      options: {
        a: "I take risks",
        b: "I am team oriented"
      },
      dimensionA: "Adaptive",
      dimensionB: "Collaborative"
    },
    {
      question: "Pick the option that describes you best:",
      options: {
        a: "I have high ethical standards",
        b: "I am cooperative"
      },
      dimensionA: "Integrity",
      dimensionB: "Collaborative"
    },
    {
      question: "Pick the option that describes you best:",
      options: {
        a: "I am results oriented",
        b: "I am customer oriented"
      },
      dimensionA: "Result",
      dimensionB: "Customer"
    },
    {
      question: "Pick the option that describes you best:",
      options: {
        a: "I have high expectations for performance",
        b: "I pay attention to detail"
      },
      dimensionA: "Result",
      dimensionB: "Detail"
    },
    {
      question: "Pick the option that describes you best:",
      options: {
        a: "I listen to customers",
        b: "I put emphasis on quality"
      },
      dimensionA: "Customer",
      dimensionB: "Detail"
    }
  ];
  // Display quiz
  buildAssessment();

  // On submit, show results
  submitButton.addEventListener('click', showResults);

})();
