const form = document.getElementById('form');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const age = document.getElementById('age');
var btnSubmit = document.getElementById('button');
btnSubmit.addEventListener('click', getRestrict);
function getRestrict() {
alert('Firstname: ' + firstName.value + '\nLastname: ' + lastName.value + '\nAge:' + age.value);
document.getElementById('form').reset();
}
