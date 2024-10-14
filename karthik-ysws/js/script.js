var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".gallery-image")).forEach(item => {
    item.addEventListener("click", event => {
        modalEle.style.display = "block";
        modalImage.src = event.target.src;
    });
});

var myVar;

function theeFunction() {
    myVar = setTimeout(showPage, 2500);
}


function showPage() {
    document.getElementById("wrapper").style.display = "block";
    document.documentElement.style.overflowY = 'hidden';
    document.body.scroll = "no";
    setTimeout(hidePreloader, 1500)
}

function hidePreloader() {
    document.getElementById("preloader").style.display = "none";
    document.documentElement.style.overflowY = 'initial';
    document.body.scroll = "yes";
}

let scrollRef = 0;

window.addEventListener('scroll', function() {
    // increase value up to 10, then refresh AOS
    scrollRef <= 5 ? scrollRef++ : AOS.refresh();
});

$('.kk').on('click', function(event) {
    event.preventDefault();
    $(window).scrollTop(585);
});

var p = $('.intro-para');
var text = p.text().split(' ');
for (var i = 0, len = text.length; i < len; i = i + 1) {
    text[i] = '<span>' + text[i] + '</span>';
}
p.html(text.join(' '));

$(".intro-para span").hover(function() {
    $(this).addClass("hover");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('intro-heading-anim');
            entry.target.classList.remove('intro-heading-none');
        }
    });
});

observer.observe(document.querySelector('.intro-heading'));
observer.observe(document.querySelector('.intro-box img'));
observer.observe(document.querySelector('.intro-para'));