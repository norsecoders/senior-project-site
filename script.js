$(document).ready(function(){
  $('#loginForm').submit(function() {
    event.preventDefault();
    var loginArray = $(this).serializeArray();
    var loginDict = $.map(loginArray, function(n,i){
      return {Key: n.name, Value: $(n).val()};
    });
    console.log(loginDict);
  });

  $('#signupForm').submit(function(){
    event.preventDefault();
    var signupArray = $(this).serializeArray();
    var signupJSON = '{"username":'+'"'+signupArray[0]['value']+'"'+',"password":'+'"'+signupArray[1]['value']+'"}'
    console.log(signupJSON);
    $.ajax({
      url:'/sp-backend1.0/api/newUser/',
      type:"POST",
      contentType:"application/json; charset=utf-8",
      data:signupJSON,
      dataType:"jsonp"
    });    
  });
});
