// scroll

$('.pg-scroll').on('click', function(e){
//tes console
//console.log(this.hash);

if(this.hash !== ''){
	e.preventDefault();

	const hash = this.hash;

	$('html, body').animate({
		scrollTop: $(hash).offset().top-50
	}, 
	1000
	);
}
//var tujuan = $(this).attr('href');

//var elemenTujuan = $(tujuan);

//$('body').animate({
 //   scrollTop: elemenTujuan.offset().top -50
//}, 1000, 'swing');

// tes console log .. >> e.preventDefault();

});

// about
$(window).on('load', function() {
	$('.par').addClass('.parMuncul');
});

// paralax

$('window').scroll(function() {

	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});
	$('.jumbotron img:hover').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1 +'%)'
	});


// portfolio

if(wScroll > $('.portfolio').offset().top-250){
	$('.portfolio .thumbnail').each(function(i){
		setTimout(function(){
			$('.portfolio .thumbnail').eq(i).addClass('muncul');
		})
	}, 2000 * (i+1));

};


});


// get modal element
var modal = document.getElementById('simpleModal');
// get open modal button
var modalBtn = document.getElementById('modalBtn');
// get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen click
modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

// function open modal
function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}

function outsideClick(e){
	if(e.target == modal){
		modal.style.display = 'none';	
	}	
}



// modal kelas 1011Fix4s

// get modal element
var modal1011Fix4s = document.getElementById('simpleModal1011Fix4s');
// get open modal button
var modalBtn1011Fix4s = document.getElementById('modalBtn1011Fix4s');
// get close button
var closeBtn1011Fix4s = document.getElementsByClassName('closeBtn1011Fix4s')[0];

//listen click
modalBtn1011Fix4s.addEventListener('click', openModal1011Fix4s);

closeBtn1011Fix4s.addEventListener('click', closeModal1011Fix4s);

window.addEventListener('click', outsideClick1011Fix4s);

// function open modal
function openModal1011Fix4s(){
	modal1011Fix4s.style.display = 'block';
}

function closeModal1011Fix4s(){
	modal1011Fix4s.style.display = 'none';
}

function outsideClick1011Fix4s(e){
	if(e.target == modal1011Fix4s){
		modal1011Fix4s.style.display = 'none';	
	}	
}




// modal kelas 1011Fix8s

// get modal element
var modal1011Fix8s = document.getElementById('simpleModal1011Fix8s');
// get open modal button
var modalBtn1011Fix8s = document.getElementById('modalBtn1011Fix8s');
// get close button
var closeBtn1011Fix8s = document.getElementsByClassName('closeBtn1011Fix8s')[0];

//listen click
modalBtn1011Fix8s.addEventListener('click', openModal1011Fix8s);

closeBtn1011Fix8s.addEventListener('click', closeModal1011Fix8s);

window.addEventListener('click', outsideClick1011Fix8s);

// function open modal
function openModal1011Fix8s(){
	modal1011Fix8s.style.display = 'block';
}

function closeModal1011Fix8s(){
	modal1011Fix8s.style.display = 'none';
}

function outsideClick1011Fix8s(e){
	if(e.target == modal1011Fix8s){
		modal1011Fix8s.style.display = 'none';	
	}	
}

