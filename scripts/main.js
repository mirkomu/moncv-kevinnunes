"use strict";$(document).ready(function(){function a(a){var t=a.attr("aria-valuenow"),r=$("<canvas></canvas>");a.parent().replaceWith(r);new Chart(r,{type:"doughnut",data:{labels:[],datasets:[{data:[t,100-t],backgroundColor:["blue"]}]}})}$("ul li a").smoothScroll();for(var t=$(".progress-bar"),r=0;r<t.length;r++)a(t.eq(r))});