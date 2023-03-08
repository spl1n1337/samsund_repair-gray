// $(function () {
//     $(".technique__item").slice(0, 15).show();
//     $("#loadMore").on('click', function (e) {
//         e.preventDefault();
//         $(".technique__item:hidden").slice(0, 15).slideDown();
//         if ($(".technique__item:hidden").length == 0) {
//             $("#loadMore").remove();
//         }
//         // $('html,body').animate({
//         //     scrollTop: $(this).offset().top
//         // }, 1000);
//     });

//     $("[data-toggle=modal]").on('click', (e) => {
//         e.preventDefault();
//         $('.overlay').show();
//     });

//     $('.modal__close').on('click', (e) => {
//         e.preventDefault();
//         $('.overlay').hide();
//     });
// });


$(document).ready(function () {
    $('.accordion-item:first-of-type .accordion-item__content').slideDown();

    $('.accordion-item__trigger').click(function () {
        const $thisAccordionContent = $(this).next('.accordion-item__content'),
              $otherAccordionContent = $('.accordion-item__content').not($thisAccordionContent),
              $accordionItem = $(this).parent();
        
        $thisAccordionContent.slideToggle(600);
        $otherAccordionContent.slideUp(600);
        $accordionItem.toggleClass('accordion-item--active');
        $('.accordion-item').not($accordionItem).removeClass('accordion-item--active');
    });

    $('.menu-trigger').click(function(){
        $(this).toggleClass('active');
        $('.nav').slideToggle();
    });
});


