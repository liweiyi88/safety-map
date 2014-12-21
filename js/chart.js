//AmCharts.ready(function () {
//    // SERIAL CHART
//    chart = new AmCharts.AmSerialChart();
//    chart.dataProvider = generateData(popData);
//    chart.categoryField = "country";
//    chart.startDuration = 1;
//    chart.valueAxes.gridColor = "#FFFFFF";
//
//
//    // AXES
//    // category
//    var categoryAxis = chart.categoryAxis;
//
//    categoryAxis.gridPosition = "start";
//    categoryAxis.position = "left";
//    categoryAxis.gridAlpha = 0;
//    categoryAxis.labelsEnabled = false;
//
//    // value
//    // in case you don't want to change default settings of value axis,
//    // you don't need to create it, as one value axis is created automatically.
//
//    // GRAPH
//    var graph = new AmCharts.AmGraph();
//    graph.valueField = "visits";
//    graph.balloonText = "[[category]]: <b>[[value]]</b>";
//    graph.type = "column";
//    graph.lineAlpha = 0;
//    graph.fillAlphas = 0.8;
//    chart.addGraph(graph);
//
//    // CURSOR
//    var chartCursor = new AmCharts.ChartCursor();
//    chartCursor.cursorAlpha = 0;
//    chartCursor.zoomable = false;
//    chartCursor.categoryBalloonEnabled = false;
//    chart.addChartCursor(chartCursor);
//    chart.write("chartdiv");
//});
//
//function generateData(popData)
//{
//    var chartData = popData;
//
//    return chartData;
//}