// Smooth Scroll with JQuery

$('.head__links').on('click', function (e) {
   if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
   }
});