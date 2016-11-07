$(document).ready(function() {
    $('ul li a').smoothScroll();

    /* var bar = new ProgressBar.Circle(container, {
         color: '#FFEA82',
         trailColor: '#eee',
         trailWidth: 1,
         duration: 1400,
         easing: 'bounce',
         strokeWidth: 6,
         from: { color: '#FFEA82', a: 0 },
         to: { color: '#ED6A5A', a: 1 },
         // Set default step function for all animate calls
         step: function(state, circle) {
             circle.path.setAttribute('stroke', state.color);
         }
     });

     $(".progress").ap(function() {
         bar.animate(1.0); // Number from 0.0 t
     });*/
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
                        'blue'
                    ]
                }]
            },

        });

        //graphe à créer
    };
    /* for (var i = 0; i < $(".progress-bar").length; i++) {*/
    // $(".progress-bar").eq(i).attr('aria-valuenow');
    //utiliser parsint pour tranformer la chaine de caractères aria-valueno
    for (var i = 0; i < listProgressBar.length; i++) {
        replaceProgressBarWithChart(listProgressBar.eq(i));
    }
    // };
    //listProgressBar.each(replaceProgressBarWithChart);
    /*var bar = new ProgressBar.Circle(valeur, {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: { color: '#FFEA82', a: 0 },
        to: { color: '#ED6A5A', a: 1 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    bar.animate(1.0);*/
    /*$(".progress-bar").append(function() {
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
    });*/
    /*var chart = new CanvasJS.Chart("progress-bar",
	{
		    
                animationEnabled: true,     
		data: [
		{        
			type: "doughnut",
			startAngle: 60,                          
							
			showInLegend: true,
			dataPoints: [
				{y: 65899660},
				{y: 60929152 }			
			]
		}
		]
	});
	chart.render();
	}*/
});