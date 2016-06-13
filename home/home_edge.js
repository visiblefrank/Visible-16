/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '593px', '100%', '18%', 'auto', 'auto'],
                            fill: ["rgba(241,235,66,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['0px', '593px', '100%', '18%', 'auto', 'auto'],
                            fill: ["rgba(241,235,66,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['-102px', '593px', '100%', '18%', 'auto', 'auto'],
                            fill: ["rgba(241,235,66,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['-203px', '593px', '100%', '18%', 'auto', 'auto'],
                            fill: ["rgba(241,235,66,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['-304px', '593px', '100%', '18%', 'auto', 'auto'],
                            fill: ["rgba(241,235,66,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'RectangleCopy5',
                            type: 'rect',
                            rect: ['-405px', '593px', '100%', '18%', 'auto', 'auto'],
                            fill: ["rgba(241,235,66,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'RectangleCopy6',
                            type: 'rect',
                            rect: ['-506px', '593px', '100%', '18%', 'auto', 'auto'],
                            fill: ["rgba(241,235,66,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-45']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '100%', '100%'],
                            overflow: 'hidden',
                            fill: ["rgba(243,234,224,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("home_edgeActions.js");
})("sliding-slices");
