const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        header.style.color = 'black' ;

    
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s'; 
        header.style.color = 'white' ;
    }
});
