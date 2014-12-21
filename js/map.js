


var w = 960;
var h = 700;
var proj = d3.geo.mercator().center([145.1, -37.80]).scale(49000);
var path = d3.geo.path().projection(proj);
var t = proj.translate(); // the projection's default translation
var s = proj.scale() // the projection's default scale

var firstColor = "#FF8533";
var secondColor = "#FF6600";
var thirdColor = "#E65C00";
var fourthColor = "#CC5200";
var fifthColor = "#B24700";
var strokeColor = "#f2ad78";

var strokeWidth = "6";

var map = d3.select("#map").append("svg:svg")
    .attr("viewBox", "0 0 " + w + " " + h)
    .call(d3.behavior.zoom().on("zoom", redraw))
    .append("svg:g");

var axes = map.append("svg:g").attr("id", "axes");

var xAxis = axes.append("svg:line")
    .attr("x1", t[0])
    .attr("y1", 0)
    .attr("x2", t[0])
    .attr("y2", h);

var yAxis = axes.append("svg:line")
    .attr("x1", 0)
    .attr("y1", t[1])
    .attr("x2", w)
    .attr("y2", t[1]);

var uk = map.append("svg:g").attr("id", "uk");


d3.json("pop.json", function (error, pop) {

    uk.selectAll("path")
        .data(topojson.feature(pop, pop.objects.population).features)
        .enter().append("svg:path")
        .attr("d", path)
        .attr("fill", function (d) {
//                    console.log(d.features[0].properties.Total_Pop);

            var pop = d.properties.Total_Pop;
            if (pop < 7161) {
                return firstColor;
            }
            else if (pop >= 7162 && pop < 12373) {
                return secondColor;
            }
            else if (pop >= 12373 && pop < 17710) {
                return thirdColor;
            }
            else if (pop > 17710 && pop < 23770) {
                return fourthColor;
            }
            else
                return fifthColor;
        })
//                .style("stroke","black")
        .on("mouseover", function (d) {
            d3.select(this).style("stroke", strokeColor);
            d3.select(this).style("stroke-width", strokeWidth);
            showTooltip(d.properties.SA2_NAME,d.properties.Total_Pop);
        })
        .on("mouseout", function (d) {
            d3.select(this).style("stroke", "none");
            $("#tooltip").hide();
        });

    d3.select("#total-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Population");
        d3.select("#location").html("Total Population");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Total_Pop);
            })
            .transition()
            .attr("fill", function (d) {
                var pop = d.properties.Total_Pop;
                if (pop < 7161) {
                    return firstColor;
                }
                else if (pop >= 7162 && pop < 12373) {
                    return secondColor;
                }
                else if (pop >= 12373 && pop < 17710) {
                    return thirdColor;
                }
                else if (pop > 17710 && pop < 23770) {
                    return fourthColor;
                }
                else
                    return fifthColor;
            })
            .duration(800);

        //
        //dataProvider = generateData(popData);
        //chart.validateData();

    });

    d3.select("#density-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Population");
        d3.select("#location").html("Density");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.PoP_Densit);
            })
            .transition()
            .attr("fill", function (d) {
                var density = d.properties.PoP_Densit;
                if (density < 2180.697101) {
                    return firstColor;
                }
                else if (density >= 2180.697101 && density < 5803.364401) {
                    return secondColor;
                }
                else if (density >= 5803.364401 && density < 11594.000101) {
                    return thirdColor;
                }
                else if (density >= 11594.000101 && density < 24599.885701) {
                    return fourthColor;
                }
                else
                    return fifthColor;
            })
            .duration(800);

        //chart.dataProvider = generateData(denData);
        //chart.validateData();

    });

    d3.select("#vehicle-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Transport");
        d3.select("#location").html("Vehicle Kilometers Travelled");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.VKT_avg);
            })
            .transition()
            .attr("fill", function (d) {
                var vkm = d.properties.VKT_avg;
                if (vkm < 127217739) {
                    return firstColor;
                }
                else if (vkm >= 127217739 && vkm < 299481629) {
                    return secondColor;
                }
                else if (vkm >= 299481629 && vkm < 5363343343) {
                    return thirdColor;
                }
                else if (vkm >= 5363343343 && vkm < 916409590) {
                    return fourthColor;
                }
                else if(vkm >= 916409590) {
                    return fifthColor;
                }
            })
            .duration(800);

        //chart.dataProvider = generateData(vktData);
        //chart.validateData();

    });

    d3.select("#crash-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.All_Crashe);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.All_Crashe;
                if (number < 55) {
                    return firstColor;
                }
                else if (number >= 55 && number < 111) {
                    return secondColor;
                }
                else if (number >= 111 && number < 189) {
                    return thirdColor;
                }
                else if (number >= 189 && number < 356) {
                    return fourthColor;
                }
                else if(number >= 356) {
                    return fifthColor;
                }
            })
            .duration(800);

        //chart.dataProvider = generateData(allCrashesData);
        //chart.validateData();

    });

    d3.select("#crash-4-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Crash Number (Age between 4 and 16)");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Age_4_16_A);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Age_4_16_A;
                if (number < 2) {
                    return firstColor;
                }
                else if (number >= 2 && number < 4) {
                    return secondColor;
                }
                else if (number >= 4 && number < 7) {
                    return thirdColor;
                }
                else if (number >= 7 && number < 14) {
                    return fourthColor;
                }
                else if(number >= 14) {
                    return fifthColor;
                }
            })
            .duration(800);

        //chart.dataProvider = generateData(crash4_16Data);
        //chart.validateData();

    });

    d3.select("#crash-60-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Crash Number (Age greater than 60)");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Age_60__Ac);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Age_60__Ac;
                if (number < 3) {
                    return firstColor;
                }
                else if (number >= 3 && number < 6) {
                    return secondColor;
                }
                else if (number >= 6 && number < 9) {
                    return thirdColor;
                }
                else if (number >= 9 && number < 13) {
                    return fourthColor;
                }
                else if(number >= 13) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(crash60Data);
        //chart.validateData();

    });

    d3.select("#bike-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Bicycle Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.All_Bicycl);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.All_Bicycl;
                if (number < 8) {
                    return firstColor;
                }
                else if (number >= 8 && number < 21) {
                    return secondColor;
                }
                else if (number >= 21 && number < 46) {
                    return thirdColor;
                }
                else if (number >= 46 && number < 135) {
                    return fourthColor;
                }
                else if(number >= 135) {
                    return fifthColor;
                }
            })
            .duration(800);

        //chart.dataProvider = generateData(bikeData);
        //chart.validateData();

    });

    d3.select("#pedestrian-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Pedestrian Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Pedestrian);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Pedestrian;
                if (number < 9) {
                    return firstColor;
                }
                else if (number >= 9 && number < 20) {
                    return secondColor;
                }
                else if (number >= 20 && number < 39) {
                    return thirdColor;
                }
                else if (number >= 39 && number < 71) {
                    return fourthColor;
                }
                else if(number >= 71) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(pedestrianData);
        //chart.validateData();

    });

    d3.select("#motor-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Motorbike Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Motorbike);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Motorbike_;
                if (number < 7) {
                    return firstColor;
                }
                else if (number >= 7 && number < 16) {
                    return secondColor;
                }
                else if (number >= 16 && number < 30) {
                    return thirdColor;
                }
                else if (number >= 30 && number < 52) {
                    return fourthColor;
                }
                else if(number >= 52) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(motorData);
        //chart.validateData();


    });

    d3.select("#truck-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Truck Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Truck_Cras);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Truck_Cras;
                if (number < 2) {
                    return firstColor;
                }
                else if (number >= 2 && number < 6) {
                    return secondColor;
                }
                else if (number >= 6 && number < 11) {
                    return thirdColor;
                }
                else if (number >= 11 && number < 17) {
                    return fourthColor;
                }
                else if(number >= 17) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(truckData);
        //chart.validateData();

    });

    d3.select("#fatal-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Fatal Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Fatal_Cras);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Fatal_Cras;
                if (number == 0) {
                    return firstColor;
                }
                else if (number == 1) {
                    return secondColor;
                }
                else if (number == 2) {
                    return thirdColor;
                }
                else if (number >= 3 && number < 5) {
                    return fourthColor;
                }
                else if(number >= 5) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(fatalData);
        //chart.validateData();

    });

    d3.select("#severe-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Severe Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.High_Sever);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.High_Sever;
                if (number < 18) {
                    return firstColor;
                }
                else if (number >= 18 && number < 34) {
                    return secondColor;
                }
                else if (number >= 34 && number < 54) {
                    return thirdColor;
                }
                else if (number >= 54 && number < 106) {
                    return fourthColor;
                }
                else if(number >= 106) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(severeData);
        //chart.validateData();

    });

    d3.select("#night-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Night Time Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Night_Time);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Night_Time;
                if (number < 13) {
                    return firstColor;
                }
                else if (number >= 13 && number < 28) {
                    return secondColor;
                }
                else if (number >= 28 && number < 47) {
                    return thirdColor;
                }
                else if (number >= 47 && number < 93) {
                    return fourthColor;
                }
                else if(number >= 93) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(nightData);
        //chart.validateData();

    });

    d3.select("#weekday-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Week Days Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Weekdays_C);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Weekdays_C;
                if (number < 44) {
                    return firstColor;
                }
                else if (number >= 44 && number < 89) {
                    return secondColor;
                }
                else if (number >= 89 && number < 156) {
                    return thirdColor;
                }
                else if (number >= 156 && number < 281) {
                    return fourthColor;
                }
                else if(number >= 281) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(weekdayData);
        //chart.validateData();

    });

    d3.select("#weekend-p").on("mouseover", function()
    {
        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Weekends Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                d3.select("#location").html("Weekends Crash Number of " + d.properties.SA2_NAME);
                d3.select("#pop").html(" is " + d.properties.Weekends_C);
                showTooltip(d.properties.SA2_NAME,d.properties.Weekends_C);
            })
            .transition()
            .attr("fill", function (d) {
                var number = d.properties.Weekends_C;
                if (number < 12) {
                    return firstColor;
                }
                else if (number >= 12 && number < 24) {
                    return secondColor;
                }
                else if (number >= 24 && number < 40) {
                    return thirdColor;
                }
                else if (number >= 40 && number < 76) {
                    return fourthColor;
                }
                else if(number >= 76) {
                    return fifthColor;
                }
            })
            .duration(800);
        //chart.dataProvider = generateData(weekendData);
        //chart.validateData();

    });
});


function showTooltip(name, data)
{
    d3.select("#tooltip").text(name +": "+data)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
    $("#tooltip").show();
}







function redraw() {
    // d3.event.translate (an array) stores the current translation from the parent SVG element
    // t (an array) stores the projection's default translation
    // we add the x and y vales in each array to determine the projection's new translation
    var tx = t[0] * d3.event.scale + d3.event.translate[0];
    var ty = t[1] * d3.event.scale + d3.event.translate[1];
    proj.translate([tx, ty]);

    // now we determine the projection's new scale, but there's a problem:
    // the map doesn't 'zoom onto the mouse point'
    proj.scale(s * d3.event.scale);

    // redraw the map
    uk.selectAll("path").attr("d", path);

    // redraw the x axis
    xAxis.attr("x1", tx).attr("x2", tx);

    // redraw the y axis
    yAxis.attr("y1", ty).attr("y2", ty);
}


