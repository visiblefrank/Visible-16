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
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'guide',
                            type: 'rect',
                            rect: ['211px', '312px', '332px', '29px', 'auto', 'auto'],
                            fill: ["rgba(238,203,13,0.8118)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'yellow-t',
                            type: 'rect',
                            rect: ['-276px', '435px', '152px', '53px', 'auto', 'auto'],
                            fill: ["rgba(238,203,13,0.8118)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'yellow',
                            type: 'rect',
                            rect: ['-18px', '328px', '87px', '87px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(238,203,13,0.81)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'pink_t',
                            type: 'rect',
                            rect: ['246px', '293px', '301px', '29px', 'auto', 'auto'],
                            fill: ["rgba(215,13,238,0.73)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'pink',
                            type: 'rect',
                            rect: ['493px', '191px', '21px', '21px', 'auto', 'auto'],
                            fill: ["rgba(215,13,238,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1151,
                    autoPlay: true,
                    labels: {
                        "Label 1": 0
                    },
                    data: [
                        [
                            "eid35",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${pink}",
                            '400px',
                            '191px'
                        ],
                        [
                            "eid28",
                            "background-color",
                            0,
                            1000,
                            "linear",
                            "${pink_t}",
                            'rgba(231,98,246,0.85)',
                            'rgba(215,13,238,0.93)'
                        ],
                        [
                            "eid105",
                            "background-color",
                            1000,
                            151,
                            "linear",
                            "${pink_t}",
                            'rgba(215,13,238,0.93)',
                            'rgba(215,13,238,0.00)'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${yellow-t}",
                            '-276px',
                            '-51px'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${yellow-t}",
                            '-45deg',
                            '-45deg'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            1000,
                            0,
                            "linear",
                            "${yellow-t}",
                            '-45deg',
                            '-45deg'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${pink_t}",
                            '-45deg',
                            '-45deg'
                        ],
                        [
                            "eid38",
                            "rotateZ",
                            1000,
                            0,
                            "linear",
                            "${pink_t}",
                            '-45deg',
                            '-45deg'
                        ],
                        [
                            "eid14",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${yellow-t}",
                            '123px',
                            '123px'
                        ],
                        [
                            "eid57",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${pink}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid32",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${pink_t}",
                            '36px',
                            '246px'
                        ],
                        [
                            "eid103",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${yellow}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid16",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${yellow-t}",
                            '354px',
                            '354px'
                        ],
                        [
                            "eid23",
                            "background-color",
                            0,
                            1000,
                            "linear",
                            "${yellow-t}",
                            'rgba(242,213,56,0.83)',
                            'rgba(238,203,13,0.8118)'
                        ],
                        [
                            "eid109",
                            "background-color",
                            1000,
                            151,
                            "linear",
                            "${yellow-t}",
                            'rgba(238,203,13,0.8118)',
                            'rgba(238,203,13,0.00)'
                        ],
                        [
                            "eid117",
                            "location",
                            0,
                            1000,
                            "linear",
                            "${yellow}",
                            [[25.5, 371.5, 0, 0, 0, 0,0],[250.5, 148.5, 0, 0, 0, 0,316.79]]
                        ],
                        [
                            "eid102",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${yellow}",
                            '1',
                            '1'
                        ],
                        [
                            "eid99",
                            "background-color",
                            1000,
                            151,
                            "linear",
                            "${pink}",
                            'rgba(215,13,238,1.00)',
                            'rgba(215,13,238,0.00)'
                        ],
                        [
                            "eid34",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${pink_t}",
                            '503px',
                            '293px'
                        ],
                        [
                            "eid58",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${pink_t}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${yellow-t}",
                            '435px',
                            '211px'
                        ],
                        [
                            "eid21",
                            "background-color",
                            0,
                            1000,
                            "linear",
                            "${yellow}",
                            'rgba(249,210,0,1.00)',
                            'rgba(238,203,13,0.81)'
                        ],
                        [
                            "eid107",
                            "background-color",
                            1000,
                            151,
                            "linear",
                            "${yellow}",
                            'rgba(238,203,13,0.8118)',
                            'rgba(238,203,13,0.00)'
                        ],
                        [
                            "eid36",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${pink}",
                            '283px',
                            '493px'
                        ],
                        [
                            "eid55",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${pink_t}",
                            '301px',
                            '301px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("square-tail_edgeActions.js");
})("EDGE-766268101");
