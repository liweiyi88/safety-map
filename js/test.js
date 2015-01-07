d3.json("boundry.json", function (error, pop) {
    uk.selectAll("path")
        .data(topojson.feature(pop, pop.objects.lga).features)
        .enter().append("svg:path")
        .attr("d", path)
        .attr("fill", "#000");
});