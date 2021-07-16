
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "dark2", 
	title:{
		text: "Student 'B'"
	},
  	axisY: {
      includeZero: true
    },
	data: [{
		type: "column",  
		
		indexLabelFontColor: "#5A5757",
      	indexLabelFontSize: 16,
		indexLabelPlacement: "outside",
		dataPoints: [
			{ x: 10, y: 72 },
			{ x: 20, y: 63 },
			{ x: 30, y: 90  , indexLabel: "\u2605 Highest"},
			{ x: 40, y: 85 },
			{ x: 50, y: 85 },
			{ x: 60, y: 65 },
			{ x: 70, y: 70 },
			{ x: 80, y: 85 },
			{ x: 90, y: 90 , indexLabel: "\u2605 Highest"},
			{ x: 100, y: 75 },
			{ x: 110, y: 85 },
			{ x: 120, y: 80 },
			
           
		]
	}]
});
chart.render();

}