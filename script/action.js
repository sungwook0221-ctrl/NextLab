
let number = 0 

$('.btn_next').click(function(){
    number = number + 2
    $('.hero ul').css({marginLeft:-number*100+'%'})
    console.log(number)
})
$('.btn_prev').click(function(){
    $('.hero ul').css({marginLeft:'0%'})
})