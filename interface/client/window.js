
// add the platform to the HTML tag
setTimeout(function(){
    document.getElementsByTagName('html')[0].className =  window.platform;
}, 100);


// disable pinch zoom gesture
document.addEventListener('mousewheel', function(e) {
    if(e.deltaY % 1 !== 0) {
        e.preventDefault();
    }
});

$(window).on('blur', function(e){ 
    $('body').addClass('app-blur');
});
$(window).on('focus', function(e){ 
    $('body').removeClass('app-blur');
});