
let number = 0  /* 전역 변수 */
/* let = 변수 이름 짓기위해 사용하는 것 number = 변수 이름. 0 = 변수 */

$('.btn_next').click(function(){ /* 펑션 = 함수 */
    number = number + 1;
    
    if(number == 3){ /* 만약(변수가 3과 같을때) 변수는 0으로 이동해라 */
        number = 0
    }

    $('.hero ul').css({marginLeft:-number*100+'%'}); /* 대문자로 값을 준다고 표시 */ /* 문자는 따움표로 감싸줌 */
    console.log(number); /* f12 모드에서 로그 확인용 */
})

$('.btn_prev').click(function(){
    number = number - 1;

    
    if(number == -1){
        number = 2
    }

    $('.hero ul').css({marginLeft:-number*100+'%'});
    console.log(number);
})