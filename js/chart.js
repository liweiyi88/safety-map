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
                "text": title
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
                "text": title
            }
        ],

        "dataProvider": dataset
    });

}







var populationFre = [ {
    "bin": "<2254",
    "frequency": 3
}, {
    "bin": "2254-4508",
    "frequency": 5
}, {
    "bin": "4508-6762",
    "frequency": 4
}, {
    "bin": "6762-9016",
    "frequency": 26
}, {
    "bin": "9016-11270",
    "frequency": 35
}, {
    "bin": "11270-13525",
    "frequency": 39
}, {
    "bin": "13525-15779",
    "frequency": 34
}, {
    "bin": "15779-18033",
    "frequency": 28
}, {
    "bin": "18033-20287",
    "frequency": 37
}, {
    "bin": ">20287",
    "frequency": 29
}];

var densityFre = [ {
    "bin": "<2690",
    "frequency": 5
}, {
    "bin": "2690-5380",
    "frequency": 183
}, {
    "bin": "5380-8071",
    "frequency": 62
}, {
    "bin": "8071-10761",
    "frequency": 14
}, {
    "bin": "10761-13452",
    "frequency": 11
}, {
    "bin": "13452-16142",
    "frequency": 2
}, {
    "bin": "16142-18833",
    "frequency": 4
}, {
    "bin": "18833-21523",
    "frequency": 2
}, {
    "bin": "21523-24213",
    "frequency": 1
}, {
    "bin": ">24214",
    "frequency": 2
}];


var vktFre = [ {
    "bin": "<106",
    "frequency": 16
}, {
    "bin": "106-212",
    "frequency": 59
}, {
    "bin": "212-318",
    "frequency": 53
}, {
    "bin": "318-424",
    "frequency": 48
}, {
    "bin": "424-530",
    "frequency": 36
}, {
    "bin": "530-635",
    "frequency": 22
}, {
    "bin": "635-741",
    "frequency": 21
}, {
    "bin": "741-847",
    "frequency": 12
}, {
    "bin": "847-953",
    "frequency": 8
}, {
    "bin": ">953",
    "frequency": 4
}];

var crashFre = [ {
    "bin": ">39",
    "frequency": 14
}, {
    "bin": "40-78",
    "frequency": 32
}, {
    "bin": "79-117",
    "frequency": 85
}, {
    "bin": "118-157",
    "frequency": 67
}, {
    "bin": "158-196",
    "frequency": 41
}, {
    "bin": "197-236",
    "frequency": 24
}, {
    "bin": "237-275",
    "frequency": 13
}, {
    "bin": "276-315",
    "frequency": 6
}, {
    "bin": "316-354",
    "frequency": 3
}, {
    "bin": ">355",
    "frequency": 2
}];

var crash4Fre = [ {
    "bin": "<1.17",
    "frequency": 56
}, {
    "bin": "1.17-2.34",
    "frequency": 62
}, {
    "bin": "2.35-3.54",
    "frequency": 52
}, {
    "bin": "3.55-4.70",
    "frequency": 31
}, {
    "bin": "4.71-5.87",
    "frequency": 27
}, {
    "bin": "5.88-7.05",
    "frequency": 26
}, {
    "bin": "7.06-8.23",
    "frequency": 18
}, {
    "bin": "8.24-9.40",
    "frequency": 7
}, {
    "bin": "9.41-10.58",
    "frequency": 5
}, {
    "bin": ">10.59",
    "frequency": 3
}];

var crash60Fre = [ {
    "bin": ">1.11",
    "frequency": 84
}, {
    "bin": "1.12-2.23",
    "frequency": 42
}, {
    "bin": "2.24-3.34",
    "frequency": 43
}, {
    "bin": "3.35-4.46",
    "frequency": 27
}, {
    "bin": "4.47-5.58",
    "frequency": 15
}, {
    "bin": "5.59-6.7",
    "frequency": 19
}, {
    "bin": "6.71-7.81",
    "frequency": 5
}, {
    "bin": "7.82-8.93",
    "frequency": 11
}, {
    "bin": "8.94-10.05",
    "frequency": 7
}, {
    "bin": ">10.06",
    "frequency": 12
}];




var populationRank = [
    {
    "zone": "South Morang",
    "number": 38321
    },
    {
        "zone": "Craigieburn - Mickleham",
        "number": 34318
    },
    {
        "zone": "Point Cook",
        "number": 32413
    },
    {
        "zone": "Preston",
        "number": 29925
    },
    {
        "zone": "Werribee",
        "number": 29741
    }
]

var densityRank = [
    {
        "zone": "Ormond - Glen Huntly",
        "number": 45737.6046
    },
    {
        "zone": "Fitzroy",
        "number": 33522.53
    },
    {
        "zone": "Parkville",
        "number": 24599.8857
    },
    {
        "zone": "Niddrie - Essendon West",
        "number": 23830.0407
    },
    {
        "zone": "South Melbourne",
        "number": 21664.6488
    }
]

var vktRank = [
    {
        "zone": "Dandenong",
        "number": 1800522323
    },
    {
        "zone": "Somerville",
        "number": 1527938786
    },
    {
        "zone": "Keilor",
        "number": 1513511644
    },
    {
        "zone": "Malvern - Glen Iris",
        "number": 1211696448
    },
    {
        "zone": "Altona North",
        "number": 1184045118
    }
]

var crashRank = [
    {
        "zone": "Melbourne",
        "number": 671
    },
    {
        "zone": "Dandenong",
        "number": 575
    },
    {
        "zone": "Preston",
        "number": 355
    },
    {
        "zone": "Richmond (VIC)",
        "number": 350
    },
    {
        "zone": "Southbank",
        "number": 309
    }
]

var crash4Rank = [
    {
        "zone": "Dandenong",
        "number": 20
    },
    {
        "zone": "Caulfield - North",
        "number": 13
    },
    {
        "zone": "Mornington",
        "number": 10
    },
    {
        "zone": "Pakenham - South",
        "number": 10
    },
    {
        "zone": "Caroline Springs",
        "number": 10
    }
]

var crash60Rank = [
    {
        "zone": "Melbourne",
        "number": 19
    },
    {
        "zone": "Malvern - Glen Iris",
        "number": 16
    },
    {
        "zone": "Dandenong",
        "number": 15
    },
    {
        "zone": "Frankston",
        "number": 15
    },
    {
        "zone": "Bentleigh - McKinnon",
        "number": 15
    }
]









var truckCrashesRank = [
    {
        "zone": "Laverton",
        "number": 22
    },
    {
        "zone": "Dandenong",
        "number": 19
    },
    {
        "zone": "Altona North",
        "number": 19
    },
    {
        "zone": "Port Melbourne Industrial",
        "number": 18
    },
    {
        "zone": "Campbellfield - Coolaroo",
        "number": 17
    }
]



var truckCrashesFre = [ {
    "bin": "<1",
    "frequency": 130
}, {
    "bin": "1-2",
    "frequency": 63
}, {
    "bin": "2-3",
    "frequency": 31
}, {
    "bin": "3-5",
    "frequency": 21
}, {
    "bin": "5-6",
    "frequency": 19
}, {
    "bin": "6-7",
    "frequency": 3
}, {
    "bin": "7-9",
    "frequency": 2
}, {
    "bin": "9-10",
    "frequency": 7
}, {
    "bin": "10-11",
    "frequency": 2
}, {
    "bin": ">11",
    "frequency": 0
}];







var fatalCrashesRank = [
    {
        "zone": "Bunyip - Garfield",
        "number": 6
    },
    {
        "zone": "Emerald - Cockatoo",
        "number": 6
    },
    {
        "zone": "Hillside",
        "number": 6
    },
    {
        "zone": "Lalor",
        "number": 5
    },
    {
        "zone": "Koo Wee Rup",
        "number": 5
    }
]



var fatalCrashesFre = [ {
    "bin": "<1",
    "frequency": 103
}, {
    "bin": "1-2",
    "frequency": 92
}, {
    "bin": "2-3",
    "frequency": 51
}, {
    "bin": "3-4",
    "frequency": 25
}, {
    "bin": "4-5",
    "frequency": 10
}, {
    "bin": ">5",
    "frequency": 5
}];








var severeInjuryCrashesRank = [
    {
        "zone": "Dandenong",
        "number": 188
    },
    {
        "zone": "Melbourne",
        "number": 186
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 105
    },
    {
        "zone": "Southbank",
        "number": 96
    },
    {
        "zone": "Preston",
        "number": 96
    }
]



var severeInjuryCrashesFre = [ {
    "bin": "<10",
    "frequency": 14
}, {
    "bin": "11-21",
    "frequency": 27
}, {
    "bin": "22-32",
    "frequency": 65
}, {
    "bin": "33-43",
    "frequency": 69
}, {
    "bin": "44-54",
    "frequency": 50
}, {
    "bin": "55-65",
    "frequency": 25
}, {
    "bin": "66-76",
    "frequency": 22
}, {
    "bin": "77-87",
    "frequency": 8
}, {
    "bin": "88-98",
    "frequency": 3
}, {
    "bin": ">99",
    "frequency": 3
}];









var nighttimeCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 177
    },
    {
        "zone": "Dandenong",
        "number": 136
    },
    {
        "zone": "Southbank",
        "number": 92
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 91
    },
    {
        "zone": "St Kilda",
        "number": 82
    }
]




var nighttimeCrashesFre = [ {
    "bin": "<9",
    "frequency": 15
}, {
    "bin": "10-19",
    "frequency": 44
}, {
    "bin": "20-30",
    "frequency": 77
}, {
    "bin": "31-40",
    "frequency": 78
}, {
    "bin": "41-51",
    "frequency": 37
}, {
    "bin": "52-61",
    "frequency": 21
}, {
    "bin": "62-71",
    "frequency": 9
}, {
    "bin": "72-82",
    "frequency": 3
}, {
    "bin": "83-92",
    "frequency": 1
}, {
    "bin": ">93",
    "frequency": 2
}];






var weekdayCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 530
    },
    {
        "zone": "Dandenong",
        "number": 447
    },
    {
        "zone": "Preston",
        "number": 280
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 266
    },
    {
        "zone": "Brunswick",
        "number": 236
    }
]




var weekdayCrashesFre = [ {
    "bin": "<30",
    "frequency": 14
}, {
    "bin": "31-61",
    "frequency": 37
}, {
    "bin": "62-92",
    "frequency": 96
}, {
    "bin": "93-123",
    "frequency": 53
}, {
    "bin": "124-154",
    "frequency": 46
}, {
    "bin": "155-186",
    "frequency": 23
}, {
    "bin": "187-217",
    "frequency": 7
}, {
    "bin": "218-248",
    "frequency": 7
}, {
    "bin": "249-279",
    "frequency": 2
}, {
    "bin": ">280",
    "frequency": 2
}];







var weekendCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 141
    },
    {
        "zone": "Dandenong",
        "number": 128
    },
    {
        "zone": "St Kilda",
        "number": 87
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 84
    },
    {
        "zone": "Preston",
        "number": 75
    }
]




var weekendCrashesFre = [ {
    "bin": "<7",
    "frequency": 14
}, {
    "bin": "8-15",
    "frequency": 31
}, {
    "bin": "16-23",
    "frequency": 56
}, {
    "bin": "24-32",
    "frequency": 70
}, {
    "bin": "33-40",
    "frequency": 52
}, {
    "bin": "41-48",
    "frequency": 24
}, {
    "bin": "49-57",
    "frequency": 22
}, {
    "bin": "58-65",
    "frequency": 10
}, {
    "bin": "66-73",
    "frequency": 3
}, {
    "bin": ">74",
    "frequency": 2
}];



var bicycleCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 242
    },
    {
        "zone": "Brunswick",
        "number": 134
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 105
    },
    {
        "zone": "Carlton",
        "number": 89
    },
    {
        "zone": "East Melbourne",
        "number": 87
    }
]




var bicycleCrashesFre = [ {
    "bin": "<13",
    "frequency": 32
}, {
    "bin": "14-27",
    "frequency": 190
}, {
    "bin": "28-42",
    "frequency": 35
}, {
    "bin": "43-56",
    "frequency": 13
}, {
    "bin": "57-70",
    "frequency": 4
}, {
    "bin": "71-84",
    "frequency": 7
}, {
    "bin": "85-99",
    "frequency": 3
}, {
    "bin": "100-113",
    "frequency": 2
}, {
    "bin": "114-127",
    "frequency": 1
}, {
    "bin": ">128",
    "frequency": 0
}];





var pedestrianCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 204
    },
    {
        "zone": "St Kilda",
        "number": 70
    },
    {
        "zone": "Dandenong",
        "number": 70
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 65
    },
    {
        "zone": "Preston",
        "number": 65
    }
]




var pedestrianCrashesFre = [ {
    "bin": "<11",
    "frequency": 21
}, {
    "bin": "12-23",
    "frequency": 161
}, {
    "bin": "24-35",
    "frequency": 69
}, {
    "bin": "36-47",
    "frequency": 22
}, {
    "bin": "48-59",
    "frequency": 10
}, {
    "bin": "60-71",
    "frequency": 0
}, {
    "bin": "72-83",
    "frequency": 5
}, {
    "bin": "84-95",
    "frequency": 0
}, {
    "bin": "96-108",
    "frequency": 0
}, {
    "bin": ">108",
    "frequency": 0
}];




var motorbikeCrashesRank = [
    {
        "zone": "Melbourne",
        "number": 99
    },
    {
        "zone": "Richmond (Vic.)",
        "number": 62
    },
    {
        "zone": "Emerald - Cockatoo",
        "number": 57
    },
    {
        "zone": "South Yarra - East",
        "number": 56
    },
    {
        "zone": "Dandenong",
        "number": 56
    }
]




var motorbikeCrashesFre = [ {
    "bin": "<4",
    "frequency": 5
}, {
    "bin": "5-10",
    "frequency": 65
}, {
    "bin": "11-16",
    "frequency": 107
}, {
    "bin": "17-22",
    "frequency": 45
}, {
    "bin": "23-28",
    "frequency": 25
}, {
    "bin": "29-33",
    "frequency": 13
}, {
    "bin": "34-39",
    "frequency": 3
}, {
    "bin": "40-45",
    "frequency": 3
}, {
    "bin": "46-51",
    "frequency": 6
}, {
    "bin": ">52",
    "frequency": 2
}];