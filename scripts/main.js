"use strict";$(document).ready(function(){function a(a){var r=a.attr("aria-valuenow"),e=$("<canvas></canvas>");a.parent().replaceWith(e);new Chart(e,{type:"doughnut",data:{labels:[],datasets:[{data:[r,100-r],backgroundColor:["blue","rgb(38, 43, 55)"],borderColor:["rgb(38, 43, 55)","rgb(38, 43, 55)"]}]}})}$("ul li a").smoothScroll(),$("div.popup").magnificPopup({delegate:"a",type:"image"});for(var r=$(".progress-bar"),e=0;e<r.length;e++)a(r.eq(e))});