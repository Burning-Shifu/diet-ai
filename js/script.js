"use strict";

$(document).ready(function () {
  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}); // function today() {
//   let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     monthsArr = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря" ],
//     dYear = date.getFullYear();
//   if (day < 10) day = '0' + day;
//   let span = document.querySelectorAll('.date-today');
//   span.forEach((item) => {
//     item.textContent = `${day} ${monthsArr[month]} ${dYear} г.`;
//   });
// }
// today();