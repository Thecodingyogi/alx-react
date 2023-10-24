import $ from "jquery";
import _ from "lodash";
import logoLogo from "../assets/holberton-logo.jpg";
import "../css/main.css";

function updateCounter() {
  let count = 0;
  return function () {
    count++;
    $("#count").text(`${count} clicks on the button`);
  };
}

const debouncedClick = _.debounce(updateCounter(), 500);

$(document).ready(function () {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button>Click here to get started</button>");
  $("body").append('<p id="count"></p>');
  $("body").append("<p>Copyright - Holberton School</p>");

  $("button").on("click", debouncedClick);
});
