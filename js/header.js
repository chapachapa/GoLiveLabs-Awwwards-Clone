/**
 * Created by Charles Park on 2015-07-13.
 */

// scroll locking the header
document.addEventListener('scroll', function(event){
    var nav = document.getElementsByClassName('bottomHeader')[0];
    var head = document.getElementsByTagName('header')[0];
    var marker = document.getElementById('marker');
    //console.log(nav);
    //console.log(nav.getBoundingClientRect().top);
    console.log(marker.getBoundingClientRect().top);
    if (marker.getBoundingClientRect().top < -49){
        head.style.position = "fixed";
        head.style.top="-49px";
    } else {
        head.style.position = "absolute";
        head.style.top="0";
    }
});