//define functions here

$(document).ready(function(){

function getIt(){
  $('p').on('click', function(){
    
  alert("Hey!")
  })
}

function frameIt(){
  $('img').addClass().on('load', function(){
    return 'tasty';
  })
}

function pressIt(){
  $("#typing").on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

});
