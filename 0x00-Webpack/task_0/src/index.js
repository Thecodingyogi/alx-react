import $ from "jquery";


const paragraphs = [
  'Holberton Dashboard',
  'Dashboard data for the students',
  'Copyright - Holberton School'
];

$(document).ready(function() {
  paragraphs.forEach((text) => {
    const paragraph = $('<p>').text(text);
    $('body').append(paragraph);
  });
});
