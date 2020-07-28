var fnme = document.getElementById('fname');
var enme = document.getElementById('email');
var dnme = document.getElementById('date');
var nnme = document.getElementById('number');

function sub() {
     
    if(fnme.value==''){
        fnme.style.border=('1px solid #c9a131');
        fnme.focus();
        return false;
       }
    if(enme.value==''){
        enme.style.border=('1px solid #c9a131');
        enme.focus();
        return false;
       }
     if(dnme.value==''){
        dnme.style.border=('1px solid #c9a131');
        dnme.focus();
        return false;
       }
    if(nnme.value==''){
        nnme.style.border=('1px solid #c9a131');
        nnme.focus();
        return false;
       }
    if(nnme.value.length < 11){
        nnme.style.border=('1px solid #c9a131');
        nnme.focus();
        return false;
    }
    
    
}


//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 102
            }, 1500);
            return false;
        }
    }
});  


$(window).scroll(function(){
   
    var scrolling = $(this).scrollTop();
    
    if(scrolling >200){
        $('.navbar').addClass('bg');
    }
    else{
        $('.navbar').removeClass('bg'); 
    }
    
     if(scrolling >200){
        $('.backtop').fadeIn();
    }
     else{
        $('.backtop').fadeOut(); 
    }
    
});

$('.backtop').click(function(){
   $('html,body').animate({scrollTop:0},1500) 
});















