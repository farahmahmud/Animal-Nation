$("#welcome-message").css('display', 'none')
$("#welcome-message").show(2000)
//to select an element by its ID instead of using a . we use a hashtag (#)
let x=0

$("#arrowbutton").on('click', function(){
  x+=1
  $(".fa-arrow-circle-down").css("color", "red")
  console.log(x)
  if (x==10){
    alert('HEY~~~ STOP CLICKING SO MANY TIMES')
  }
})