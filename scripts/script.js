$(function(){
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement:'#about'
    })
    .setClassToggle('#about','show')
    .addTo(controller);

});