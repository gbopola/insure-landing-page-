const nav = document.querySelector('.navbar ul');
const ham = document.querySelector('.hamburger');

document.querySelector('.hamburger').addEventListener('click', function(){
   if(nav.style.display === 'none'){
       nav.style.display = 'flex';
       nav.style.maxHeight = nav.scrollHeight + "px";
       ham.src = "./images/icon-close.svg";
   } else {
       ham.src = "./images/icon-hamburger.svg";
       nav.style.display = 'none';
       nav.style.maxHeight = 0;
   }
});
