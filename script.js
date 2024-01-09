
const xValues = ["20","","25","","30","","35","40","","60","","65"];
const yValues = [25,50,75,100,125,150,175,200,225,250,275,300];
const barColors ="blue"

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display:true,
      
    }
  }
});

function createPieChart(elementId) {
    // Data for the chart
    let value=[[78,22],[95,5],[59,41]]
    const labelsValue=[["Average"],["Top"],["Me"]]
    var data = {
        labels:labelsValue[elementId],
        datasets: [{
            data: value[elementId], 
            backgroundColor: [
                'rgb(87, 185, 255)',
                'rgba(200, 200, 200, 0.7)'
            ],
            borderWidth: 1
        }]
    };

    // Configuration options
    var options = {
        responsive: true,
        maintainAspectRatio: false
    };

    // Get the canvas element
    var ctx = document.getElementById(elementId).getContext('2d');

    // Create the pie chart
    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
}

// Create three pie charts
createPieChart("0");
createPieChart("1");
createPieChart("2");