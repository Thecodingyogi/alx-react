import $ from 'jquery';
import _ from 'lodash';


const countParagraph = $('#count');
const button = $('<button>').text('Click here to get started');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append(button);
$('body').append(countParagraph);
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  countParagraph.text(`${count} clicks on the button`);
}

button.on('click', _.debounce(updateCounter, 1000));
