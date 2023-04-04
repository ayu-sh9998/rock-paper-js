// $("document").ready(function(){
// 	var indexToGet = $('.slider .slick-slide').index( $('#center_on_me') );

// 	  $('.slider-nav').slick({
// 		  slidesToShow: 1,
// 		  infinite: true,
// 		  slidesToScroll: 1,
// 		  dots: false,
// 		  autoplay: true,
// 		  autoplaySpeed: 0,
// 		  speed: 750,
// 		  focusOnSelect: true,
// 		  pauseOnHover: false,
// 		  slidesToScroll: 1,
// 		  arrows:false
// 	});

// 	var indexToGet = $('.slider .slick-slide').index( $('#center_on_me') );

// 	  $('.slider-nav2').slick({
// 		  slidesToShow: 1,
// 		  infinite: true,
// 		  //centerMode: true,
// 		  slidesToScroll: 1,
// 		  initialSlide: indexToGet,
// 		  dots: true,
// 		  focusOnSelect: true
// 	});

// 	   $('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
// 	 	if(stopslide == 'stop'){
// 	 		$('.slider-nav').slick('slickPause');
// 	 		return false;
// 	 	}
// 	 });

// 	 $('.slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
// 	 	if(stopslide == 'true'){
// 	 		stopslide = 'stop'
//    			console.log("stop "+currentSlide);
// 	 	}
// 	 });
// });

// var stopslide = 'false'
// function start(){
// 	//$('.slider-nav').slick('slickSetOption', 'autoplay', false, true).slick('slickGoTo', 2);
// 	if(stopslide == 'true' || stopslide == 'stop'){
// 		$('.slider-nav').slick('slickPlay');
// 		stopslide = 'false';
// 	}else{
// 		$('.slider-nav').slick('slickPause');
// 		stopslide = 'true';
// 	}
	
// }

////////////////////////////////////////////
var maxscore = 5;

$("document").ready(function(){

	  $('.slider-nav').slick({
		  slidesToShow: 1,
		  infinite: true,
		  slidesToScroll: 1,
		  dots: false,
		  autoplay: true,
		  autoplaySpeed: 0,
		  speed: 300,
		  focusOnSelect: true,
		  pauseOnHover: false,
		  slidesToScroll: 1,
		  arrows:false,
		  paused:true
	});

	  $('.slider-nav2').slick({
		  slidesToShow: 1,
		  infinite: true,
		  //centerMode: true,
		  slidesToScroll: 1,
		  initialSlide: 0,
		  dots: false,
		  focusOnSelect: true
	});

	   $('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	 	if(stopslide == 'stop'){
	 		$('.slider-nav').slick('slickPause');
	 		return false;
	 	}
	 });

	 $('.slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
	 	if(stopslide == 'true'){
	 		stopslide = 'stop'
   			
   			let playerval = $('.slider-nav2').slick('slickCurrentSlide');
   			let res = result(playerval,currentSlide)
   			if(res == 1){
   				myscore++;
   				console.log("you win "+currentSlide);
   			}else if(res == 0){
   				comscore++;
   				console.log("you lose "+currentSlide);
   			}else if(res == -1){
   				console.log("tie "+currentSlide);
   			}

   			if(myscore == maxscore || comscore == maxscore){
   				$("#startbutton").text("Reset");
   				$("#startbutton").addClass("btn-danger");
   			}

   			scoreupdate();
   			
	 	}
	 });
});

function scoreupdate(){
	jQuery("#myscore").text(myscore);
	jQuery("#compscore").text(comscore);
}

function rand(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var stopslide = 'false'
function startshuffle(){
	$('.slider-nav').slick('slickPlay');
	stopslide = 'false';
}

function stopshuffle(){
	$('.slider-nav').slick('slickPause');
	stopslide = 'true';
}

var myscore = 0;
var comscore = 0;
function start(){

	 if(myscore < maxscore && comscore < maxscore){
	 	startshuffle();
	    let sec = rand(100,1000);
	    setTimeout(function(){
	    	stopshuffle();
	    }, sec);
	 }
	 else{
	 	console.log("Reset");
		myscore = 0;
		comscore = 0;
		$("#startbutton").text("Start");
		$("#startbutton").removeClass("btn-danger");
		scoreupdate();
	 }

    if(myscore == maxscore){
        console.log("YOU WIN!!");
    }else if(comscore == maxscore){
        console.log("Computer WIN!!");
    }
}

var map = {
    '0':'1',
    '1':'2',
    '2':'0'
}
function result(myInp, compInp){
    //console.log(compInp)
    //return 1;
    if(myInp == compInp){
        return -1;
    }else if(map[myInp] == compInp){
        return 0;
    }else{
        return 1;
    }
}
/*
stone = 1
paper = 2
sissor = 3
*/
/*
function rand(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
var map = {
    '1':'2',
    '2':'3',
    '3':'1'
}
function result(myInp){
    let compInp = rand(1,3);
    //console.log(compInp)
    if(myInp == compInp){
        return -1;
    }else if(map[myInp] == compInp){
        return 0;
    }else{
        return 1;
    }
}
var myscore = 0;
var comscore = 0;
function start(){
    do{
        var num = prompt("enter a num: ");
        let res = result(num);
        if(res == 1){
            myscore++;
        }else if(res == 0){
            comscore++;
        }
    }while(myscore<5 && comscore<5)
    if(myscore == 5){
        console.log("YOU WIN!!");
    }else{
        console.log("Computer WIN!!");
    }
}
start();




// setTimeout(function(){
//   $('.slider-nav').slick('slickGoTo', 2);
//    $('.slider-nav').slick('slickSetOption', 'autoplay', false, true);
// },2000)
*/