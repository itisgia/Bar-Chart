 google.charts.load('current', {packages: ['corechart']});
 google.charts.setOnLoadCallback(drawChart);

 // this function draw a chart using google API
 function drawChart() {
   console.log('pack has loaded');

  // var elrkjlwerjl // dafault variables
  // const  sdfsdfsdf // stands consistent variale. which never change its value
  // let sdfsdfsdf // similar to var. can re-assign the value. it should be only change inside a block e.g for loop,
  // // functuon.....
  // //e.g
  // for (var i = 0; i < array.length; i++) {
  //   let name;
  // }
  //  name = surName; // not allowed

      const data = google.visualization.arrayToDataTable([
          ["Year", "Birth", "Death", "Marriage"],
          ["2013", 58719, 29568, 19237],
          ["2014", 57243, 31026, 20125],
          ["2015", 61038, 31608, 19947],
          ["2016", 59430, 31176, 20235]
      ]);

      const options = {
          title: "Birth, Deaths and Marriage From New Zealand",
          subtitle: "From 2013 to 2016",
          hAxis: {
            title: "Number"
          },
          vAxis: {
            title: "Year"
          }

      }

      const chart = new google.visualization.AreaChart(document.getElementById('chartContainer'));
      chart.draw(data, options);
 } // end of function
