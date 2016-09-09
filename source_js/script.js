// /* Smooth scroll on home page */
// $("a[href^='#/home']").click(function() {
// 	console.log('this = ' + this);
// 	console.log('location = ' + location);
// 	console.log('location.pathname = ' + location.pathname);
// 	console.log('location.hostname = ' + location.hostname);	
// 	console.log('this.pathname = ' + this.pathname);
// 	console.log('this.href= ' + this.href);
//     if ( location.replace(/^\//,'') == this.replace(/^\//,'') || location.href == this.href ) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top - $('navlist').height()
//             }, 700);
//             return false;
//         }
//     }
// });