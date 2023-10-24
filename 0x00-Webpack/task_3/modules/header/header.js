import $ from 'jquery';
import './header.css';
import logoImage from '.../assets/holberton-logo.jpg';

$(document).ready(function () {
  const logoContainer = $('<div/>').attr('id', 'logo');
  $('body').append(logoContainer);

  const logo = $('<img/>').attr('src', '../assets/holberton-logo.jpg');
  logoContainer.append(logo);
  $('body').append('<h1>Holberton Dashboard</h1>');
});

console.log("Init header");
