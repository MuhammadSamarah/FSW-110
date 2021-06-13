const form = document.getElementById('form');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const age = document.getElementById('age');


var btnSubmit = document.getElementById('button');


btnSubmit.addEventListener('click', getRestrict);
function getRestrict() {
  var restrict = [];
  if (form.elements["gluten"].checked) {
    restrict.push(document.getElementById("gluten").value)
  }
  if (form.elements["keto"].checked) {
    restrict.push(document.getElementById("keto").value)
  }
  if (form.elements["vegetarian"].checked) {
    restrict.push(document.getElementById("vegetarian").value)
  }

  btnSubmit.addEventListener('click', howLikely);
function howLikely() {
  var likley = [];
  if (form.elements["likely"].checked) {
    likley.push(document.getElementById("likely").value)
  }
  if (form.elements["somewhat likely"].checked) {
   likley.push(document.getElementById("somewhat likely").value)
  }
  if (form.elements["not likely"].checked) {
    likley.push(document.getElementById("not likely").value)
  }


  
  // var question = document.getElementById('question').value
  // var questionAnswer = "";
  // var a;
  // for (a = 0; a < question.length; a++) {
  //   if (question[a].checked) {
  //     questionAnswer = questionAnswer + question[a].value + " ";
  //   }
  // }

 
  var question = form.elements["question"].value;


  alert('Firstname: ' + firstName.value + '\nLastname: ' + lastName.value + '\nAge:' + age.value + '\nHave you ever shopped with us: ' + question + '\nDietary restrictions: ' + restrict[0] + '\nRecommend this product to a friend?: ' + likley);

  document.getElementById('form').reset();
}}
