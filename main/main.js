//Get modal element
var modal = document.getElementById('ModalView');
//get login Navigation button
var loginNavBtn = document.getElementById('loginRef')

var closeBtn= document.getElementsByClassName('closeBtn')[0]; //0 index since it gives us an elements arr.

var index =0;
slideShow(); //starts automatic slideshow

//Set onclickListener for login modal
loginNavBtn.addEventListener('click', openModal);

//Set onClickListener for close modal
closeBtn.addEventListener('click', closeModal);

//outside click listener on window
window.addEventListener('click', outsideClick);
//open a Modal
function openModal(){
    modal.style.display='block';
}

function closeModal(){
    modal.style.display='none';
}

function outsideClick(e){
    if (e.target == modal){
        modal.style.display='none'; //closes it if we click the cursor outside of the box.    
    }
}

function slideShow(){
  
    var x = document.getElementsByClassName("Slideshow");
    for (var i = 0; i < x.length; i++ ){
        x[i].style.display="none"; //sets everything to invisible first
    }
    index ++;
    if (index > x.length){
        index= 1;
    }
    x[index-1].style.display="block"; //set an element to visible
    setTimeout(slideShow,3000); //Change image every five seconds
}