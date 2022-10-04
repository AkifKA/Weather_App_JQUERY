// const formJS = document.querySelectorAll("form")[0];
// const formJquery = jQuery("form");
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const list = $(".cities").eq(0);

// console.log(formJS);
// console.log(inputJQ);

// get(index) ==> toArray(get()), eq(index)

// load VS DOMContentLoaded

//window.onload = () => {}; ==> JS

$(window).on("load", () => {
  console.log("window.load");
});

// document.addEventListener("DOMContentLoaded", () => {});

$(document).ready(() => {
  console.log("DOMContentLoaded");
});
