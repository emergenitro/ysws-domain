var curs = document.getElementById('click');
var bigCurs = document.getElementById('clickBig');
var isTouchingA = false;
$(document).ready(function(){
    $(document).mousemove(function(e){

        setTimeout(() => {
            $('#click').css({
                'top': (e.clientY - 2) + 'px',
                'left': (e.clientX - 2) + 'px',
            });
        }, 25);
        setTimeout(() => {
            bigCurs.style.left = (e.clientX - 12.25) + "px";
            bigCurs.style.top = (e.clientY - 12.5) + "px";
        }, 100);
        if ((curs.style.marginTop == "-15px" || curs.style.marginLeft == "-15px") && (!isTouchingA)) {
            curs.style.marginTop = "0px";
            curs.style.marginLeft = "0px";
        }
    });
});

var listOfThem = document.getElementsByTagName("a");
for (var i = 0; i < listOfThem.length; ++i) {
    listOfThem[i].addEventListener("mouseover", function(e) {
        isTouchingA = true;
        bigCurs.style.opacity = "0";
        curs.style.opacity = "0.3";
        curs.style.width = "40px";
        curs.style.height = "40px";
        setTimeout(() => {
            curs.style.marginLeft = "-15px";
            curs.style.marginTop = "-15px";
        }, 75);

    })
    listOfThem[i].addEventListener("mouseout", function(e) {
        isTouchingA = false;
        bigCurs.style.opacity = "0.7";
        curs.style.visibility = "visible";
        curs.style.opacity = "1";
        curs.style.width = "5px";
        curs.style.height = "5px";
        curs.style.marginLeft = "0px";
        curs.style.marginTop = "0px";
    })
}