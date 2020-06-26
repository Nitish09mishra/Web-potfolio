
const currentDate= new Date()
const year= currentDate.getFullYear()
const time= currentDate.getHours()
// console.log(time)
$(".year").text(year);

if (time < 12) {
  $(".greeting").text("Good morning!  ")
  $(".greeting").css("color", "green")
} 
else if (time >= 12 && time <= 16) {
  $(".greeting").text("Good afternoon!  ")
  $(".greeting").css("color", "red")
} 
else {
  $(".greeting").text("Good evening!  ")
  $(".greeting").css("color", "rgb(13,17,85)")
}
