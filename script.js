$(document).ready(function () {
  //populates current date when the screen is loaded
  function setPlanner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    
  }
  setPlanner();

  $("#clear").click(function () {
    localStorage.clear();
    location.reload();
  });

  var input_textarea1 = document.querySelector("#toDo1");
  var save_button1 = document.querySelector("#saveThis1");
  input_textarea1.value = localStorage.getItem("9-AM");
  save_button1.addEventListener("click", updateOutput1);

  function updateOutput1() {
    localStorage.setItem("9-AM", input_textarea1.value);
  }

  var input_textarea2 = document.querySelector("#toDo2");
  var save_button2 = document.querySelector("#saveThis2");
  input_textarea2.value = localStorage.getItem("10-AM");
  save_button2.addEventListener("click", updateOutput2);

  function updateOutput2() {
    localStorage.setItem("10-AM", input_textarea2.value);
  }

  var input_textarea3 = document.querySelector("#toDo3");
  var save_button3 = document.querySelector("#saveThis3");
  input_textarea3.value = localStorage.getItem("11-AM");
  save_button3.addEventListener("click", updateOutput3);

  function updateOutput3() {
    localStorage.setItem("11-AM", input_textarea3.value);
  }

  var input_textarea4 = document.querySelector("#toDo4");
  var save_button4 = document.querySelector("#saveThis4");
  input_textarea4.value = localStorage.getItem("12-PM");
  save_button4.addEventListener("click", updateOutput4);

  function updateOutput4() {
    localStorage.setItem("12-PM", input_textarea4.value);
  }

  var input_textarea5 = document.querySelector("#toDo5");
  var save_button5 = document.querySelector("#saveThis5");
  input_textarea5.value = localStorage.getItem("1-PM");
  save_button5.addEventListener("click", updateOutput5);

  function updateOutput5() {
    localStorage.setItem("1-PM", input_textarea5.value);
  }

  var input_textarea6 = document.querySelector("#toDo6");
  var save_button6 = document.querySelector("#saveThis6");
  input_textarea6.value = localStorage.getItem("2-PM");
  save_button6.addEventListener("click", updateOutput6);

  function updateOutput6() {
    localStorage.setItem("2-PM", input_textarea6.value);
  }

  var input_textarea7 = document.querySelector("#toDo7");
  var save_button7 = document.querySelector("#saveThis7");
  input_textarea7.value = localStorage.getItem("3-PM");
  save_button7.addEventListener("click", updateOutput7);

  function updateOutput7() {
    localStorage.setItem("3-PM", input_textarea7.value);
  }

  var input_textarea8 = document.querySelector("#toDo8");
  var save_button8 = document.querySelector("#saveThis8");
  input_textarea8.value = localStorage.getItem("4-PM");
  save_button8.addEventListener("click", updateOutput8);

  function updateOutput8() {
    localStorage.setItem("4-PM", input_textarea8.value);
  }

  var input_textarea9 = document.querySelector("#toDo9");
  var save_button9 = document.querySelector("#saveThis9");
  input_textarea9.value = localStorage.getItem("5-PM");
  save_button9.addEventListener("click", updateOutput9);

  function updateOutput9() {
    localStorage.setItem("5-PM", input_textarea9.value);
  }

 var current = new Date().getHours();
 function displayColor() {
  if (current > 9){
    $("#toDo1").addClass("past");
    } else if (current  >= 9 && current < 10) {
    $("#toDo1").addClass("present");
    } else if (current < 9) {
    $("#toDo1").addClass("future");
  }
  if (current > 10) {
    $("#toDo2").addClass("past");
  } else if (current >= 10 && current < 11) {
    $("#toDo2").addClass("present");
  } else if (current < 10) {
    $("#toDo2").addClass("future");
  }
 }

 
});
