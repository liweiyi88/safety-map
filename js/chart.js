/**
 * Created by Julian on 2/05/15.
 */
function makeHistogramChart(classname, dataset,title)
{
    var chart = AmCharts.makeChart("his-chart",{
        "type": "serial",
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },

        "categoryField": "bin",
        "categoryAxis": {
            "gridPosition": "start",
            "labelsEnabled": false,
            "tickLength": "0",
            "gridAlpha":0
        },
        "graphs": [
            {
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "frequency"

            }
        ],
        "valueAxes": [
            {
                "title": "Frequency",
                "tickLength": "0",
                "gridAlpha":0
            }
        ],
        "titles": [
            {
                "size": 15,
                "text": ''
            }
        ],

        "dataProvider": dataset
    });

}

function makeRankChart(classname, dataset,title)
{
    var chart = AmCharts.makeChart("rank-chart",{
        "type": "serial",
        "rotate": true,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "zone",
        "categoryAxis": {
            "gridPosition": "start",
            "position": "left",
            "tickLength": "0",
            "title":"Top 5 zones",
            "gridAlpha":0
        },
        "graphs": [
            {
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "number"

            }
        ],
        "valueAxes": [
            {
                "position": "top",
                "labelsEnabled": false,
                "tickLength": 0,
                "gridAlpha":0
            }
        ],
        "titles": [
            {
                "size": 15,
                "text": ''
            }
        ],

        "dataProvider": dataset
    });
}


function makeVKTChart(data_2010,data_2011,data_2012,data_2013)
{
    AmCharts.makeChart("detail-chart",
        {
            "type": "serial",
            "categoryField": "date",
            "dataDateFormat": "YYYY",
            "theme": "default",
            "categoryAxis": {
                "minPeriod": "YYYY",
                "parseDates": true,
                "axisColor": "#FFFFFF",
                "gridThickness": 0
            },
            "chartCursor": {
                "animationDuration": 0,
                "categoryBalloonDateFormat": "YYYY"
            },
            "trendLines": [],
            "graphs": [
                {
                    "bullet": "round",
                    "id": "AmGraph-1",
                    "title": "graph 1",
                    "valueField": "column-1"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "axisColor": "#FFFFFF",
                    "fillAlpha": 0.58,
                    "gridAlpha": 0.07,
                    "labelFrequency": 2,
                    "gridCount": 2,
                    "offset": 15,
                    "tickLength": 0,
                    "title": "Axis title",
                    "titleFontSize": 1
                }
            ],
            "allLabels": [],
            "balloon": {},
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": ""
                }
            ],
            "dataProvider": [
                {
                    "date": "2010",
                    "column-1": data_2010
                },
                {
                    "date": "2011",
                    "column-1": data_2011
                },
                {
                    "date": "2012",
                    "column-1": data_2012
                },
                {
                    "date": "2013",
                    "column-1": data_2013
                }
            ]
        }
    );
}

function makeDetailChart(data_2009,data_2010,data_2011,data_2012,data_2013)
{
    AmCharts.makeChart("detail-chart",
        {
            "type": "serial",
            "categoryField": "date",
            "dataDateFormat": "YYYY",
            "theme": "default",
            "categoryAxis": {
                "minPeriod": "YYYY",
                "parseDates": true,
                "axisColor": "#FFFFFF",
                "gridThickness": 0
            },
            "chartCursor": {
                "animationDuration": 0,
                "categoryBalloonDateFormat": "YYYY"
            },
            "trendLines": [],
            "graphs": [
                {
                    "bullet": "round",
                    "id": "AmGraph-1",
                    "title": "graph 1",
                    "valueField": "column-1"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "axisColor": "#FFFFFF",
                    "fillAlpha": 0.58,
                    "gridAlpha": 0.07,
                    "labelFrequency": 2,
                    "gridCount": 2,
                    "offset": 15,
                    "tickLength": 0,
                    "title": "Axis title",
                    "titleFontSize": 1
                }
            ],
            "allLabels": [],
            "balloon": {},
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": ""
                }
            ],
            "dataProvider": [
                {
                    "date": "2009",
                    "column-1": data_2009
                },
                {
                    "date": "2010",
                    "column-1": data_2010
                },
                {
                    "date": "2011",
                    "column-1": data_2011
                },
                {
                    "date": "2012",
                    "column-1": data_2012
                },
                {
                    "date": "2013",
                    "column-1": data_2013
                }
            ]
        }
    );
}





var vktFre = [ {
    "bin": "0-37",
    "frequency": 24
}, {
    "bin": "38-75",
    "frequency": 25
}, {
    "bin": "76-112",
    "frequency": 57
}, {
    "bin": "113-150",
    "frequency": 63
}, {
    "bin": "151-187",
    "frequency": 38
}, {
    "bin": "188-225",
    "frequency": 24
}, {
    "bin": "226-262",
    "frequency": 19
}, {
    "bin": "263-300",
    "frequency": 12
}, {
    "bin": "301-337",
    "frequency": 5
}, {
    "bin": "338+",
    "frequency": 9
}];

var crashFre = [ {
    "bin": "0-15",
    "frequency": 39
}, {
    "bin": "16-31",
    "frequency": 106
}, {
    "bin": "32-46",
    "frequency": 60
}, {
    "bin": "47-61",
    "frequency": 44
}, {
    "bin": "62-76",
    "frequency": 12
}, {
    "bin": "77-92",
    "frequency": 7
}, {
    "bin": "93-107",
    "frequency": 4
}, {
    "bin": "108-122",
    "frequency": 1
}, {
    "bin": "123-137",
    "frequency": 1
}, {
    "bin": "138+",
    "frequency": 2
}];

var crash4Fre = [ {
    "bin": "0",
    "frequency": 132
}, {
    "bin": "1",
    "frequency": 79
}, {
    "bin": "2",
    "frequency": 75
}, {
    "bin": "3",
    "frequency": 16
}, {
    "bin": "3+",
    "frequency": 4
}];

var crash60Fre = [ {
    "bin": "0-3",
    "frequency": 42
}, {
    "bin": "4-6",
    "frequency": 61
}, {
    "bin": "7-9",
    "frequency": 72
}, {
    "bin": "10-12",
    "frequency": 35
}, {
    "bin": "13-15",
    "frequency": 23
}, {
    "bin": "16-18",
    "frequency": 25
}, {
    "bin": "19-21",
    "frequency": 12
}, {
    "bin": "22-25",
    "frequency": 1
}, {
    "bin": "26-28",
    "frequency": 1
}, {
    "bin": "29+",
    "frequency": 4
}];




var vktRank = [
    {
        "zone": "Upper Yarra Valley",
        "number": 599.93
    },
    {
        "zone": "Brunswick",
        "number": 470.00
    },
    {
        "zone": "Brunswick East",
        "number": 437.78
    },
    {
        "zone": "Brunswick West",
        "number": 402.04
    },
    {
        "zone": "Coburg",
        "number": 399.58
    }
]

var crashRank = [
    {
        "zone": "Melbourne",
        "number": 244
    },
    {
        "zone": "Dandenong",
        "number": 212
    },
    {
        "zone": "Preston",
        "number": 136
    },
    {
        "zone": "Richmond (VIC)",
        "number": 111
    },
    {
        "zone": "Southbank",
        "number": 99
    }
]

var crash4Rank = [
    {
        "zone": "Dandenong",
        "number": 4
    },
    {
        "zone": "Broadmeadows",
        "number": 4
    },
    {
        "zone": "Narre Warren",
        "number": 4
    },
    {
        "zone": "South Morang",
        "number": 4
    },
    {
        "zone": "Preston",
        "number": 3
    }
]

var crash60Rank = [
    {
        "zone": "Dandenong",
        "number": 49
    },
    {
        "zone": "Preston",
        "number": 41
    },
    {
        "zone": "Melbourne",
        "number": 36
    },
    {
        "zone": "Thomastown",
        "number": 34
    },
    {
        "zone": "Caulfield - North",
        "number": 25
    }
]









var truckCrashesRank = [
    {
        "zone": "Newport",
        "number": 6
    },
    {
        "zone": "Sunshine West",
        "number": 6
    },
    {
        "zone": "Southbank",
        "number": 5
    },
    {
        "zone": "Deer Park - Derrimut",
        "number": 5
    },
    {
        "zone": "Laverton",
        "number": 5
    }
]



var truckCrashesFre = [ {
    "bin": "0",
    "frequency": 180
}, {
    "bin": "1",
    "frequency": 54
}, {
    "bin": "2",
    "frequency": 23
}, {
    "bin": "3",
    "frequency": 7
}, {
    "bin": "4",
    "frequency": 6
}, {
    "bin": "5",
    "frequency": 4
}, {
    "bin": "5+",
    "frequency": 2
}];







var fatalCrashesRank = [
    {
        "zone": "Laverton",
        "number": 4
    },
    {
        "zone": "Dandenong",
        "number": 3
    },
    {
        "zone": "Rockbank - Mount Cottrell",
        "number": 3
    },
    {
        "zone": "Footscray",
        "number": 3
    },
    {
        "zone": "Craigieburn - Mickleham",
        "number": 3
    }
]



var fatalCrashesFre = [ {
    "bin": "0",
    "frequency": 201
}, {
    "bin": "1",
    "frequency": 57
}, {
    "bin": "2",
    "frequency": 13
}, {
    "bin": "3",
    "frequency": 4
}, {
    "bin": "4+",
    "frequency": 1
}];








var severeInjuryCrashesRank = [
    {
        "zone": "Dandenong",
        "number": 78
    },
    {
        "zone": "Melbourne",
        "number": 75
    },
    {
        "zone": "Preston",
        "number": 39
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 36
    },
    {
        "zone": "Epping",
        "number": 30
    }
]



var severeInjuryCrashesFre = [ {
    "bin": "0-5",
    "frequency": 48
}, {
    "bin": "6-10",
    "frequency": 93
}, {
    "bin": "11-15",
    "frequency": 65
}, {
    "bin": "16-20",
    "frequency": 38
}, {
    "bin": "21-24",
    "frequency": 18
}, {
    "bin": "25-29",
    "frequency": 9
}, {
    "bin": "30-34",
    "frequency": 1
}, {
    "bin": "35-39",
    "frequency": 2
}, {
    "bin": "40-44",
    "frequency": 0
}, {
    "bin": "45+",
    "frequency": 2
}];









var nighttimeCrashesRank = [
    {
        "zone": "Dandenong",
        "number": 53
    },
    {
        "zone": "Melbourne",
        "number": 53
    },
    {
        "zone": "Preston",
        "number": 36
    },
    {
        "zone": "Southbank",
        "number": 36
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 27
    }
]




var nighttimeCrashesFre = [ {
    "bin": "0-3",
    "frequency": 55
}, {
    "bin": "4-7",
    "frequency": 78
}, {
    "bin": "8-10",
    "frequency": 51
}, {
    "bin": "11-13",
    "frequency": 49
}, {
    "bin": "14-17",
    "frequency": 16
}, {
    "bin": "18-20",
    "frequency": 9
}, {
    "bin": "21-23",
    "frequency": 11
}, {
    "bin": "24-27",
    "frequency":2
}, {
    "bin": "28-30",
    "frequency": 1
}, {
    "bin": "31+",
    "frequency":4
}];






var weekdayCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 192
    },
    {
        "zone": "Dandenong",
        "number": 181
    },
    {
        "zone": "Preston",
        "number": 106
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 87
    },
    {
        "zone": "North Melbourne",
        "number": 81
    }
]




var weekdayCrashesFre = [ {
    "bin": "0-12",
    "frequency": 53
}, {
    "bin": "13-24",
    "frequency": 99
}, {
    "bin": "25-36",
    "frequency": 64
}, {
    "bin": "37-48",
    "frequency": 34
}, {
    "bin": "49-60",
    "frequency": 10
}, {
    "bin": "61-72",
    "frequency": 9
}, {
    "bin": "73-84",
    "frequency": 3
}, {
    "bin": "85-96",
    "frequency": 1
}, {
    "bin": "97-108",
    "frequency":1
}, {
    "bin": "109+",
    "frequency": 2
}];







var weekendCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 52
    },
    {
        "zone": "Emerald - Cockatoo",
        "number": 33
    },
    {
        "zone": "Dandenong",
        "number": 31
    },
    {
        "zone": "Preston",
        "number": 30
    },
    {
        "zone": "Yarra Valley",
        "number": 29
    }
]




var weekendCrashesFre = [ {
    "bin": "0-3",
    "frequency": 47
}, {
    "bin": "4-7",
    "frequency": 67
}, {
    "bin": "8-10",
    "frequency": 69
}, {
    "bin": "11-13",
    "frequency": 52
}, {
    "bin": "14-16",
    "frequency": 16
}, {
    "bin": "17-20",
    "frequency": 7
}, {
    "bin": "21-23",
    "frequency": 7
}, {
    "bin": "24-26",
    "frequency": 5
}, {
    "bin": "27-29",
    "frequency": 2
}, {
    "bin": "30+",
    "frequency": 4
}];



var bicycleCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 77
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 43
    },
    {
        "zone": "Carlton",
        "number": 39
    },
    {
        "zone": "Fitzroy",
        "number": 37
    },
    {
        "zone": "Brunswick",
        "number": 34
    }
]




var bicycleCrashesFre = [ {
    "bin": "0-5",
    "frequency": 197
}, {
    "bin": "6-10",
    "frequency": 43
}, {
    "bin": "11-14",
    "frequency": 15
}, {
    "bin": "15-19",
    "frequency": 5
}, {
    "bin": "20-24",
    "frequency": 6
}, {
    "bin": "25-29",
    "frequency": 5
}, {
    "bin": "30-34",
    "frequency": 0
}, {
    "bin": "35-39",
    "frequency": 2
}, {
    "bin": "40-43",
    "frequency": 2
}, {
    "bin": "44+",
    "frequency": 1
}];





var pedestrianCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 78
    },
    {
        "zone": "Dandenong",
        "number": 30
    },
    {
        "zone": "Brunswick",
        "number": 21
    },
    {
        "zone": "East Melbourne",
        "number": 21
    },
    {
        "zone": "Preston",
        "number": 21
    }
]




var pedestrianCrashesFre = [ {
    "bin": "0-5",
    "frequency": 197
}, {
    "bin": "6-10",
    "frequency": 51
}, {
    "bin": "11-15",
    "frequency": 19
}, {
    "bin": "16-20",
    "frequency": 4
}, {
    "bin": "21-24",
    "frequency": 3
}, {
    "bin": "25-29",
    "frequency": 0
}, {
    "bin": "30-34",
    "frequency": 1
}, {
    "bin": "35-39",
    "frequency": 0
}, {
    "bin": "40-44",
    "frequency": 0
}, {
    "bin": "45+",
    "frequency": 1
}];




var motorbikeCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 38
    },
    {
        "zone": "Dandenong",
        "number": 30
    },
    {
        "zone": "Emerald - Cockatoo",
        "number": 30
    },
    {
        "zone": "Yarra Valley",
        "number": 27
    },
    {
        "zone": "Footscray",
        "number": 21
    }
]




var motorbikeCrashesFre = [ {
    "bin": "0-2",
    "frequency": 93
}, {
    "bin": "3-5",
    "frequency": 86
}, {
    "bin": "6-7",
    "frequency": 59
}, {
    "bin": "8-10",
    "frequency": 15
}, {
    "bin": "11-12",
    "frequency": 3
}, {
    "bin": "13-14",
    "frequency": 6
}, {
    "bin": "15-17",
    "frequency": 5
}, {
    "bin": "18-19",
    "frequency": 4
}, {
    "bin": "20-21",
    "frequency": 1
}, {
    "bin": "22+",
    "frequency": 4
}];