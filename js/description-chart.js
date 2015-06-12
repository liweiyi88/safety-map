AmCharts.makeChart("fatality",
    {
        "type": "serial",
        "path": "http://www.amcharts.com/lib/3/",
        "categoryField": "category",
        "startDuration": 1,
        "theme": "default",
        "categoryAxis": {
            "gridPosition": "start"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]] of [[category]]:[[value]]",
                "bullet": "round",
                "gapPeriod": 3,
                "id": "AmGraph-1",
                "title": "road fatality rate",
                "valueField": "column-1"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "gridCount": 0,
                "gridThickness": 0,
                "minorGridAlpha": 0,
                "offset": -4,
                "title": ""
            }
        ],
        "allLabels": [],
        "balloon": {},
        "legend": {
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": ""
            }
        ],
        "dataProvider": [
            {
                "category": "1980",
                "column-1": "22.3"
            },
            {
                "category": "2010",
                "column-1": "6.1"
            }
        ]
    }
);
