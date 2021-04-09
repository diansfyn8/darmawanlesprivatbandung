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

// modal 2

// get modal element
var modal2 = document.getElementById('simpleModal2');
// get open modal button
var modalBtn2 = document.getElementById('modalBtn2');
// get close button
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

//listen click
modalBtn2.addEventListener('click', openModal2);

closeBtn2.addEventListener('click', closeModal2);

window.addEventListener('click', outsideClick2);

// function open modal
function openModal2(){
	modal2.style.display = 'block';
}

function closeModal2(){
	modal2.style.display = 'none';
}

function outsideClick2(e){
	if(e.target == modal2){
		modal2.style.display = 'none';	
	}	
}


