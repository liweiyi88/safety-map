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
            var selectedCrash = $('.selectpicker').val();
            var selectedText = $('.selectpicker option:selected').text();
            if(selectedCrash == 'vehicle-p')
            {
                makeVKTChart(d.properties.VKT_2010__,d.properties.VKT_2011__,d.properties.VKT_2012__,d.properties.VKT_2013__);
                getCrashData(d.properties.VKT_2013__);
                getTotalCrashData(d);
            }
            else
            {
                var data_2009 = '';
                var data_2010 = '';
                var data_2011 = '';
                var data_2012 = '';
                var data_2013 = '';
                if(selectedCrash == 'crash-p')
                {
                    data_2009 = d.properties.TotalC_200;
                    data_2010 = d.properties.TotalC_201;
                    data_2011 = d.properties.TotalC_202;
                    data_2012 = d.properties.TotalC_203;
                    data_2013 = d.properties.TotalC_204;
                }
                else if(selectedCrash == 'crash-4-p')
                {
                    data_2009 = d.properties.age4_2009;
                    data_2010 = d.properties.age4_2010;
                    data_2011 = d.properties.age4_2011;
                    data_2012 = d.properties.age4_2012;
                    data_2013 = d.properties.age4_2013;
                }
                else if(selectedCrash == 'crash-60-p')
                {
                    data_2009 = d.properties.age60_2009;
                    data_2010 = d.properties.age60_2010;
                    data_2011 = d.properties.age60_2011;
                    data_2012 = d.properties.age60_2012;
                    data_2013 = d.properties.age60_2013;
                }
                else if(selectedCrash == 'bike-p')
                {
                    data_2009 = d.properties.Bike_2009;
                    data_2010 = d.properties.Bike_2010;
                    data_2011 = d.properties.Bike_2011;
                    data_2012 = d.properties.Bike_2012;
                    data_2013 = d.properties.Bike_2013;
                }
                else if(selectedCrash == 'pedestrian-p')
                {
                    data_2009 = d.properties.Pedes_2009;
                    data_2010 = d.properties.Pedes_2010;
                    data_2011 = d.properties.Pedes_2011;
                    data_2012 = d.properties.Pedes_2012;
                    data_2013 = d.properties.Pedes_2013;
                }
                else if(selectedCrash == 'motor-p')
                {
                    data_2009 = d.properties.Mbike_2009;
                    data_2010 = d.properties.Mbike_2010;
                    data_2011 = d.properties.Mbike_2011;
                    data_2012 = d.properties.Mbike_2012;
                    data_2013 = d.properties.Mbike_2013;
                }
                else if(selectedCrash == 'truck-p')
                {
                    data_2009 = d.properties.Truck_2009;
                    data_2010 = d.properties.Truck_2010;
                    data_2011 = d.properties.Truck_2011;
                    data_2012 = d.properties.Truck_2012;
                    data_2013 = d.properties.Truck_2013;
                }
                else if(selectedCrash == 'fatal-p')
                {
                    data_2009 = d.properties.Fatal_2009;
                    data_2010 = d.properties.Fatal_2010;
                    data_2011 = d.properties.Fatal_2011;
                    data_2012 = d.properties.Fatal_2012;
                    data_2013 = d.properties.Fatal_2013;
                }
                else if(selectedCrash == 'severe-p')
                {
                    data_2009 = d.properties.Serious_20;
                    data_2010 = d.properties.Serious_21;
                    data_2011 = d.properties.Serious_22;
                    data_2012 = d.properties.Serious_23;
                    data_2013 = d.properties.Serious_24;
                }
                else if(selectedCrash == 'night-p')
                {
                    data_2009 = d.properties.NightT_200;
                    data_2010 = d.properties.NightT_201;
                    data_2011 = d.properties.NightT_202;
                    data_2012 = d.properties.NightT_203;
                    data_2013 = d.properties.NightT_204;
                }
                else if(selectedCrash == 'weekday-p')
                {
                    data_2009 = d.properties.WeekD_2009;
                    data_2010 = d.properties.WeekD_2010;
                    data_2011 = d.properties.WeekD_2011;
                    data_2012 = d.properties.WeekD_2012;
                    data_2013 = d.properties.WeekD_2013;
                }
                else if(selectedCrash == 'weekend-p')
                {
                    data_2009 = d.properties.WeekE_2009;
                    data_2010 = d.properties.WeekE_2010;
                    data_2011 = d.properties.WeekE_2011;
                    data_2012 = d.properties.WeekE_2012;
                    data_2013 = d.properties.WeekE_2013;
                }

                getCrashData(data_2013);
                getTotalCrashData(d);
                makeDetailChart(data_2009,data_2010,data_2011,data_2012,data_2013);

               // makeDetailChart(d.properties.TotalC_200, d.properties.TotalC_201, d.properties.TotalC_202, d.properties.TotalC_203, d.properties.TotalC_204);
            }
            $('#crash-type').text(selectedText);


        })
        .on("mouseout", function (d) {
          //  d3.select(this).style("stroke", "white");
            $("#tooltip").hide();
        });




    $('.selectpicker').on('change',function()
    {
        var selectedValue = $(this).val();
        var selectedText = $('.selectpicker option:selected').text();

        if(selectedValue == 'vehicle-p')
        {
            createMap('VKT_2013__',vktFre,vktRank,'VKT',1.27,2.99,5.36,9.16);
        }
        else if(selectedValue == 'crash-p')
        {
            createMap('TotalC_204',crashFre,crashRank,'All Crashes',55,111,189,356);
        }
        else if(selectedValue == 'crash-4-p')
        {
            createMap('age4_2013',crash4Fre,crash4Rank,'',2,4,7,14);
        }
        else if(selectedValue == 'crash-60-p')
        {
            createMap('age60_2013',crash60Fre,crash60Rank,'',3,6,9,13);
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
            createMap('Fatal_2013',fatalCrashesFre,fatalCrashesRank,'',0,1,2,5);
        }
        else if(selectedValue == 'severe-p')
        {
            createMap('Serious_24',severeInjuryCrashesFre,severeInjuryCrashesRank,'',18,34,54,106);
        }
        else if(selectedValue == 'night-p')
        {
            createMap('NightT_204',nighttimeCrashesFre,nighttimeCrashesRank,'',13,28,47,93);
        }
        else if(selectedValue == 'weekday-p')
        {
            createMap('WeekD_2013',weekdayCrashesFre,weekdayCrashesRank,'',44,89,156,281);
        }
        else if(selectedValue == 'weekend-p')
        {
            createMap('WeekE_2013',weekendCrashesFre,weekendCrashesRank,'',12,24,40,76);
        }

        $('#titleofchart').text(selectedText);
        //$('#crash-type').text(selectedText);
    });



    function columnMapper(d,columnName)
    {
        var column;

        if(columnName == 'VKT_2013__')
        {
            column = d.properties.VKT_2013__;
        }
        else if(columnName == 'TotalC_204')
        {
            column = d.properties.TotalC_204;
        }
        else if(columnName == 'age4_2013')
        {
            column = d.properties.age4_2013;
        }
        else if(columnName == 'age60_2013')
        {
            column = d.properties.age60_2013;
        }
        else if(columnName == 'Bike_2013')
        {
            column = d.properties.Bike_2013;
        }
        else if(columnName == 'Pedes_2013')
        {
            column = d.properties.Pedes_2013;
        }
        else if(columnName == 'Mbike_2013')
        {
            column = d.properties.Mbike_2013;
        }
        else if(columnName == 'Truck_2013')
        {
            column = d.properties.Truck_2013;
        }
        else if(columnName == 'Fatal_2013')
        {
            column = d.properties.Fatal_2013;
        }
        else if(columnName == 'Serious_24')
        {
            column = d.properties.Serious_24;
        }
        else if(columnName == 'NightT_204')
        {
            column = d.properties.NightT_204;
        }
        else if(columnName == 'WeekD_2013')
        {
            column = d.properties.WeekD_2013;
        }
        else if(columnName == 'WeekE_2013')
        {
            column = d.properties.WeekE_2013;
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
    var zoneNumber = d.properties.SA2_MAIN;

    var avgVKT = d.properties.Average_VK;
    $('#vktInput').val(avgVKT);
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


function getCrashData(data_2013)
{
    var number = data_2013;
    $('.crash-data').text(number);
}

function getTotalCrashData(d)
{
    var totalCrashData = d.properties.TotalC_204;
    $('.total-crash-data').text(totalCrashData);

    var fatalCrashData = d.properties.Fatal_2013;
    $('.fatal-crash-data').text(fatalCrashData);

    var pedestrianCrashData = d.properties.Pedes_2013;
    $('.pedestrian-crash-data').text(pedestrianCrashData);

    var bikeCrashData = d.properties.Bike_2013;
    $('.bike-crash-data').text(bikeCrashData);
}

