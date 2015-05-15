var w = 970;
var h = 600;
var center = [w / 2, h / 2];
var proj = d3.geo.mercator().center([145.1, -37.80]).scale(40000);
var path = d3.geo.path().projection(proj);
var t = proj.translate(); // the projection's default translation
var s = proj.scale() // the projection's default scale
var zoom = d3.behavior.zoom()
    .scaleExtent([0, 10])
    .on("zoom", zoomed);



//orange
//var firstColor = "#FCE9D4";
//var secondColor = "#F9C78B";
//var thirdColor = "#F79F47";
//var fourthColor = "#F57B1B";
//var fifthColor = "#E45500";

var firstColor = "#feedde";
var secondColor = "#fdbe85";
var thirdColor = "#fd8d3c";
var fourthColor = "#e6550d";
var fifthColor = "#a63603";


var strokeColor = '';

var strokeWidth = "1";

var map = d3.select("#map").append("svg:svg")
    .attr("viewBox", "0 0 " + w + " " + h)
    .call(zoom)
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
        .style("stroke", "white")
        .on("mouseover", function (d) {
            d3.select(this).style("stroke", strokeColor);
            d3.select(this).style("stroke-width", strokeWidth);
            showTooltip(d.properties.SA2_NAME,d.properties.Total_Pop);


        })
        .on('click',function(d)
        {
            clickToPreFill(d);
        })
        .on("mouseout", function (d) {
            d3.select(this).style("stroke", "white");
            $("#tooltip").hide();
        });

    d3.select("#total-p").on("click", function()
    {
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

        makeHistogramChart('his-chart',populationFre,'Total Population');
        makeRankChart('rank-chart',populationRank,'Total Population');

    });


    d3.select("#density-p").on("click", function()
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

        makeHistogramChart('his-chart',densityFre,'Population Density');
        makeRankChart('rank-chart',densityRank,'Population Density');

    });

    d3.select("#vehicle-p").on("click", function()
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

        makeHistogramChart('his-chart',vktFre,'VKT');
        makeRankChart('rank-chart',vktRank,'VKT');

    });

    d3.select("#crash-p").on("click", function()
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

        makeHistogramChart('his-chart',crashFre,'All Crashes');
        makeRankChart('rank-chart',crashRank,'All Crashes');

    });

    d3.select("#crash-4-p").on("click", function()
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

        makeHistogramChart('his-chart',crash4Fre,'Crashes 4-16 year old');
        makeRankChart('rank-chart',crash4Rank,'Crashes 4-16 year old');

    });

    d3.select("#crash-60-p").on("click", function()
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
        makeHistogramChart('his-chart',crash60Fre,'Crashes 60+ year old');
        makeRankChart('rank-chart',crash60Rank,'Crashes 60+ year old');

    });

    d3.select("#bike-p").on("click", function()
    {

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

        makeHistogramChart('his-chart',bicycleCrashesFre,'Bicycle Crashes');
        makeRankChart('rank-chart',bicycleCrashesRank,'Bicycle Crashes');

    });

    d3.select("#pedestrian-p").on("click", function()
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
        makeHistogramChart('his-chart',pedestrianCrashesFre,'Pedestrian Crashes');
        makeRankChart('rank-chart',pedestrianCrashesRank,'Pestrian Crashes');

    });

    d3.select("#motor-p").on("click", function()
    {

        d3.select("#big-t").html("Crashes");
        d3.select("#location").html("Motorbike Crash Number");
        d3.select("#pop").html("");
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,d.properties.Motorbike_);
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
        makeHistogramChart('his-chart',motorbikeCrashesFre,'Motorbike Crashes');
        makeRankChart('rank-chart',motorbikeCrashesRank,'Motorbike Crashes');


    });

    d3.select("#truck-p").on("click", function()
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
        makeHistogramChart('his-chart',truckCrashesFre,'Truck Crashes');
        makeRankChart('rank-chart',truckCrashesRank,'Truck Crashes');

    });

    d3.select("#fatal-p").on("click", function()
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
        makeHistogramChart('his-chart',fatalCrashesFre,'Fatal Crashes');
        makeRankChart('rank-chart',fatalCrashesRank,'Fatal Crashes');

    });

    d3.select("#severe-p").on("click", function()
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
        makeHistogramChart('his-chart',severeInjuryCrashesFre,'Severe Injury Crashes');
        makeRankChart('rank-chart',severeInjuryCrashesRank,'Severe Injury Crashes');

    });

    d3.select("#night-p").on("click", function()
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
        makeHistogramChart('his-chart',nighttimeCrashesFre,'Night Time Crashes');
        makeRankChart('rank-chart',nighttimeCrashesRank,'Night Time Crashes');

    });

    d3.select("#weekday-p").on("click", function()
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
        makeHistogramChart('his-chart',weekdayCrashesFre,'Weekday Crashes');
        makeRankChart('rank-chart',weekdayCrashesRank,'Weekday Crashes');

    });

    d3.select("#weekend-p").on("click", function()
    {
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d) {
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
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
        makeHistogramChart('his-chart',weekendCrashesFre,'Weekend Crashes');
        makeRankChart('rank-chart',weekendCrashesRank,'Weekend Crashes');

    });
});


function showTooltip(name, data)
{
    d3.select("#title").text(name);
    d3.select("#content").text("Number: " +data);
    d3.select("#tooltip")
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


//function barTransition(filename)
//{
//    d3.csv(filename, function(error, data) {
//
//        var width = 220,
//            barHeight = 11;
//
//        var x = d3.scale.linear()
//            .range([0, width]);
//        x.domain([0, d3.max(data, function(d) { return d.value; })]);
//
//        d3.selectAll(".chart").selectAll("rect")
//            .data(data)
//            .transition()
//            .attr("width", function(d) { return x(d.value); })
//            .attr("x",function(d){return width-x(d.value);} )
//            .attr("height", barHeight - 2)
//            .style("fill", "#FF8533");
//
//        d3.selectAll(".chart").selectAll("rect")
//            .on("mouseover", function (d) {
//                d3.select("#uk").selectAll("path")
//                    .style("stroke-width", function(d2){
//                        if(d.name == d2.properties.SA2_NAME) {
//                            return strokeWidth;
//                        }
//                    })
//                    .style("stroke", function(d1){
//                        if(d.name == d1.properties.SA2_NAME) {
//                            return strokeColor;
//                        }
//                    });
//
//                showTooltip(d.name,d.value);
//            });
//
//
//
//
//    });
//}


function zoomed() {
    map.attr("transform",
        "translate(" + zoom.translate() + ")" +
        "scale(" + zoom.scale() + ")"
    );
}

function interpolateZoom (translate, scale) {
    var self = this;
    return d3.transition().duration(350).tween("zoom", function () {
        var iTranslate = d3.interpolate(zoom.translate(), translate),
            iScale = d3.interpolate(zoom.scale(), scale);
        return function (t) {
            zoom
                .scale(iScale(t))
                .translate(iTranslate(t));
            zoomed();
        };
    });
}

function zoomClick() {
    console.log("hello");
    var clicked = d3.event.target,
        direction = 1,
        factor = 0.2,
        target_zoom = 1,
        center = [w / 2, h / 2],
        extent = zoom.scaleExtent(),
        translate = zoom.translate(),
        translate0 = [],
        l = [],
        view = {x: translate[0], y: translate[1], k: zoom.scale()};

    d3.event.preventDefault();
    direction = (this.id === 'zoom-in') ? 1 : -1;
    target_zoom = zoom.scale() * (1 + factor * direction);

    if (target_zoom < extent[0] || target_zoom > extent[1]) { return false; }

    translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
    view.k = target_zoom;
    l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

    view.x += center[0] - l[0];
    view.y += center[1] - l[1];

    interpolateZoom([view.x, view.y], view.k);
}

d3.selectAll('.zoom-btn').on('click', zoomClick);


function clickToPreFill(d)
{
    var zoneNumber = d.properties.Zones__SA2;
    $('#vktInput').val(prediction[zoneNumber]['vkt']);
    $('#weeklyIncome').val(prediction[zoneNumber]['weeklyIncome']);
    $('#bikePopulation').val(prediction[zoneNumber]['bike']);
    $('#residential').val(prediction[zoneNumber]['resident']);
    $('#commercial').val(prediction[zoneNumber]['commercial']);
    $('#mixIndex').val(prediction[zoneNumber]['mixIndex']);

    $('#result').text('Result');
}




