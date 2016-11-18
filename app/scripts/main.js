$(document).ready(function() {
    $('ul li a').smoothScroll();
    $('#hautdepage a').smoothScroll();
    $('div.popup').magnificPopup({ delegate: 'a', type: 'image' });

    var listProgressBar = $('.progress-bar');

    function replaceProgressBarWithChart(progressBar) {
        var valeur = progressBar.attr('aria-valuenow');
        var canvas = $('<canvas></canvas>');
        progressBar.parent().replaceWith(canvas);
        var myChart = new Chart(canvas, {
            type: 'doughnut',
            data: {
                labels: [

                ],
                datasets: [{
                    data: [valeur, 100 - valeur],
                    backgroundColor: [
                        'blue',
                        'rgb(38, 43, 55)'
                    ],
                    borderColor: [
                        'rgb(38, 43, 55)',
                        'rgb(38, 43, 55)'
                    ],

                }]
            },

        });

        //graphe à créer
    };

    //utiliser parsint pour tranformer la chaine de caractères aria-valueno
    for (var i = 0; i < listProgressBar.length; i++) {
        replaceProgressBarWithChart(listProgressBar.eq(i));
    }

});