//define functions here

$(document).ready(function(){});

function getIt(){
  $('p').on('click', function(){
    
  alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', addClass('tasty'))
}

function pressIt(){
  $("#typing").on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}


