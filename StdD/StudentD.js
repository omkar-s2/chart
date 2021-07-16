
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "dark2", 
	title:{
		text: "Student 'D'"
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
			{ x: 10, y: 63 },
			{ x: 20, y: 45 , indexLabel: "\u2605 Lowest"},
			{ x: 30, y: 59  },
			{ x: 40, y: 72 },
			{ x: 50, y: 70 },
			{ x: 60, y: 58 },
			{ x: 70, y: 68 },
			{ x: 80, y: 79 , indexLabel: "\u2605 Highest"},
			{ x: 90, y: 72 },
			{ x: 100, y: 67 },
			{ x: 110, y: 72 },
			{ x: 120, y: 75 },
			
           
		]
	}]
});
chart.render();

}