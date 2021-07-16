
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "dark2", 
	title:{
		text: "Student 'A'"
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
			{ x: 10, y: 56 },
			{ x: 20, y: 75 },
			{ x: 30, y: 69 },
			{ x: 40, y: 86 , indexLabel: "\u2605 Highest"},
			{ x: 50, y: 65 },
			{ x: 60, y: 72 },
			{ x: 70, y: 86 , indexLabel: "\u2605 Highest"},
			{ x: 80, y: 79 },
			{ x: 90, y: 80 },
			{ x: 100, y: 78 },
			{ x: 110, y: 75 },
			{ x: 120, y: 70 },
			
           
		]
	}]
});
chart.render();

}