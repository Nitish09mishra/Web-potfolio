
const currentDate= new Date()
const year= currentDate.getFullYear()
const time= currentDate.getHours()
// console.log(time)
$(".year").text(year);

if (time < 12) {
  $(".greets").text("Good morning!  ")
  $(".greets").css("color", "green")
} 
else if (time >= 12 && time <= 16) {
  $(".greets").text("Good afternoon!  ")
  $(".greets").css("color", "red")
} 
else {
  $(".greets").text("Good evening!  ")
  $(".greets").css("color", "rgb(13,17,85)")
}
