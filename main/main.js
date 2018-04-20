//Get modal element
var modal = document.getElementById('ModalView');

var registerModal = document.getElementById('registerModal');
//get login Navigation button
var loginNavBtn = document.getElementById('loginRef');
var registerNavButton = document.getElementById('registerRef');

document.getElementById('wrongUser').style.visibility = "hidden";

//Login Button obj
var loginBtn = document.getElementById('loginBtn'); 
//register button obj
var registerBtn = document.getElementById('registerBtn');
function postLogin(){
    var username = document.getElementById('usrnm').value;
    var password = document.getElementById('psswrd').value;
    if (username == 'bestcommunity' && password == 'bestcommunity'){
             loginBtn.setAttribute('data-state', 'on');
             closeModal();
             document.getElementById('loginRef').innerHTML = 'Log Out';
        }else{
            document.getElementById('wrongUser').style.visibility= "visible";
        }
       
    
};

function postRegister(){
    
};

registerNavButton.onclick = function() {
    registerModal.style.display = "block";
};

var closeBtn= document.getElementsByClassName('closeBtn')[0]; //0 index since it gives us an elements arr.
var closeBtn2= document.getElementsByClassName('closeBtn')[1]; //0 index since it gives us an elements arr.

var index =0;
slideShow(); //starts automatic slideshow

//Set onclickListener for login modal
loginNavBtn.addEventListener('click', openModal);

//Set onClickListener for close modal
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal);



//outside click listener on window
window.addEventListener('click', outsideClick);
//open a Modal
function openModal(){
    modal.style.display='block';
}

function closeModal(){
    modal.style.display='none';
    registerModal.style.display='none';
}

function outsideClick(e){
//login text field
var username = document.getElementById('usrnm');
var password = document.getElementById('psswrd');
//Register text field    
var regUsr = document.getElementById('reguser');
var regPwd = document.getElementById('regPwd');
var regEmail = document.getElementById('regEmail');

    if (e.target == loginBtn){
        if (username.value != '' && password.value != ''){
           e.preventDefault();
           postLogin(); 
        }
        
    }else if (e.target == modal){
        modal.style.display='none'; //closes it if we click the cursor outside of the box.    
    }else if (e.target == registerBtn){
        if (regUsr.value != '' && regPwd != '' && regEmail != ''){
            e.preventDefault();
            postRegister();
        } 
    }else if (e.target == registerModal){
        registerModal.style.display ='none';
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