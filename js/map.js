var w = parseInt(d3.select('.map').style('width'), 10);
var h = parseInt(d3.select('.map').style('height'), 10);


console.log(w);

var centerX = 144.75;
var centerY = -37.70;

if(w < 1300)
{
    centerX = 144.95;
}

var center = [w / 2, h / 2];
var proj = d3.geo.mercator().center([centerX, centerY]).scale(50000);
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


var strokeColor = '#4d4747';

var strokeWidth = "1";

var map = d3.select("#map").append("svg:svg")
    .call(zoom)
    .attr("viewBox", "0 0 " + w + " " + h)
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
        .data(topojson.feature(pop, pop.objects.safety).features)
        .enter().append("svg:path")
        .attr("d", path)
        .attr("fill", function (d) {
            var pop = d.properties.TotalC_203;
            if (pop <= 55) {
                return firstColor;
            }
            else if (pop > 55 && pop <= 111) {
                return secondColor;
            }
            else if (pop > 111 && pop <= 189) {
                return thirdColor;
            }
            else if (pop > 189 && pop <= 356) {
                return fourthColor;
            }
            else
                return fifthColor;
        })
        .style("stroke", strokeColor)
        .on("mouseover", function (d) {
            d3.select(this).style("stroke", strokeColor);
            d3.select(this).style("stroke-width", strokeWidth);
            showTooltip(d.properties.SA2_NAME,d.properties.TotalC_204);


        })
        .on('click',function(d)
        {
            clickToPreFill(d);
            makeDetailChart(d.properties.TotalC_200, d.properties.TotalC_201, d.properties.TotalC_202, d.properties.TotalC_203, d.properties.TotalC_204);
            getCrashData(d);
        })
        .on("mouseout", function (d) {
          //  d3.select(this).style("stroke", "white");
            $("#tooltip").hide();
        });




    $('.selectpicker').on('change',function()
    {
        var selectedValue = $(this).val();

        if(selectedValue == 'vehicle-p')
        {
            createMap('VKT_avg',vktFre,vktRank,'VKT',127217739,299481629,536334334,916409590);
        }
        else if(selectedValue == 'crash-p')
        {
            createMap('TotalC_204',crashFre,crashRank,'All Crashes',55,111,189,356);
        }
        else if(selectedValue == 'crash-4-p')
        {
            createMap('4_16_2013',crash4Fre,crash4Rank,'',2,4,7,14);
        }
        else if(selectedValue == 'crash-60-p')
        {
            createMap('60__2013',crash60Fre,crash60Rank,'',3,6,9,13);
        }
        else if(selectedValue == 'bike-p')
        {
            createMap('Bike_2013',bicycleCrashesFre,bicycleCrashesRank,'',8,21,46,135);
        }
        else if(selectedValue == 'pedestrian-p')
        {
            createMap('Pedes_2013',pedestrianCrashesFre,pedestrianCrashesRank,'',9,20,39,71);
        }
        else if(selectedValue == 'motor-p')
        {
            createMap('Mbike_2013',motorbikeCrashesFre,motorbikeCrashesRank,'',7,16,30,52);
        }
        else if(selectedValue == 'truck-p')
        {
            createMap('Truck_2013', truckCrashesFre,truckCrashesRank,'',2,6,11,17);
        }
        else if(selectedValue == 'fatal-p')
        {
            createMap('Fatal_Cras',fatalCrashesFre,fatalCrashesRank,'',0,1,2,5);
        }
        else if(selectedValue == 'severe-p')
        {
            createMap('High_Sever',severeInjuryCrashesFre,severeInjuryCrashesRank,'',18,34,54,106);
        }
        else if(selectedValue == 'night-p')
        {
            createMap('Night_Time',nighttimeCrashesFre,nighttimeCrashesRank,'',13,28,47,93);
        }
        else if(selectedValue == 'weekday-p')
        {
            createMap('WeekD_2013',weekdayCrashesFre,weekdayCrashesRank,'',44,89,156,281);
        }
        else if(selectedValue == 'weekend-p')
        {
            createMap('WeekE_2013',weekendCrashesFre,weekendCrashesRank,'',12,24,40,76);
        }
    });



    function columnMapper(d,columnName)
    {
        var column;

        if(columnName == 'VKT_avg')
        {
            column = d.properties.VKT_avg;
        }
        else if(columnName == 'TotalC_204')
        {
            column = d.properties.TotalC_204;
        }
        else if(columnName == 'Age_4_16_A')
        {
            column = d.properties.Age_4_16_A;
        }
        else if(columnName == 'Age_60__Ac')
        {
            column = d.properties.Age_60__Ac;
        }
        else if(columnName == 'All_Bicycl')
        {
            column = d.properties.All_Bicycl;
        }
        else if(columnName == 'Pedestrian')
        {
            column = d.properties.Pedestrian;
        }
        else if(columnName == 'Motorbike_')
        {
            column = d.properties.Motorbike_;
        }
        else if(columnName == 'Truck_Cras')
        {
            column = d.properties.Truck_Cras;
        }
        else if(columnName == 'Fatal_Cras')
        {
            column = d.properties.Fatal_Cras;
        }
        else if(columnName == 'High_Sever')
        {
            column = d.properties.High_Sever;
        }
        else if(columnName == 'Night_Time')
        {
            column = d.properties.Night_Time;
        }
        else if(columnName == 'Weekdays_C')
        {
            column = d.properties.Weekdays_C;
        }
        else if(columnName == 'Weekends_C')
        {
            column = d.properties.Weekends_C;
        }

        return column;
    }

    function createMap(columnName,chartFreJs,chartRankJs,chartSuffix,a,b,c,f)
    {
        var column = '';
        d3.select("#uk").selectAll("path")
            .on("mouseover", function (d)
            {
                column = columnMapper(d,columnName);
                d3.select(this).style("stroke", strokeColor);
                d3.select(this).style("stroke-width", strokeWidth);
                showTooltip(d.properties.SA2_NAME,column);
            })
            .transition()
            .attr("fill", function (d) {
                number = columnMapper(d,columnName);
                if (number <= a) {
                    return firstColor;
                }
                else if (number > a && number <= b) {
                    return secondColor;
                }
                else if (number >b && number <= c) {
                    return thirdColor;
                }
                else if (number >c && number < f) {
                    return fourthColor;
                }
                else
                    return fifthColor;
            })
            .duration(800);

        makeHistogramChart('his-chart',chartFreJs,chartSuffix);
        makeRankChart('rank-chart',chartRankJs,chartSuffix);
    }
});


//d3.select('svg').on("dblclick.zoom", null);
//d3.select('svg').on("touchstart.zoom", null);
d3.select('svg').on("wheel.zoom", null);
d3.select('svg').on("mousewheel.zoom", null);
d3.select('svg').on("MozMousePixelScroll.zoom", null);


function showTooltip(name, data)
{
    d3.select("#title").text(name);
    var number = null;
    if(data == parseInt(data, 10))
    {
        number = data;
    }
    else
    {
         number = parseFloat(data).toFixed(2);
    }

    d3.select("#content").text(numberWithCommas(number));
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


function clicked(d) {
    var x, y, k;

    if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d;
    } else {
        x = w / 2;
        y = h / 2;
        k = 1;
        centered = null;
    }

    g.selectAll("path")
        .classed("active", centered && function(d) { return d === centered; });

    g.transition()
        .duration(750)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 1.5 / k + "px");
}

function zoomClick() {
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
    var zoneNumber = d.properties.SA2_Zones;

    $('#vktInput').val(prediction[zoneNumber]['vkt']);
    $('#weeklyIncome').val(prediction[zoneNumber]['weeklyIncome']);
    $('#bikePopulation').val(prediction[zoneNumber]['bike']);
    $('#residential').val(prediction[zoneNumber]['resident']);
    $('#commercial').val(prediction[zoneNumber]['commercial']);
    $('#mixIndex').val(prediction[zoneNumber]['mixIndex']);
    $('.result-zone').text(d.properties.SA2_NAME);
    $('#result-zone').hide();
    $('#result').text('');
}



function numberWithCommas(x) {

    //x = x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    x = parseFloat(x).toFixed(2);
    return x;
}


function getCrashData(d)
{
    var number = d.properties.TotalC_204;
    $('.crash-data').text(number);
}
