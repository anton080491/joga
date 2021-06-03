window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let blocks = require('./parts/blocksOverflow'),
        calkulator = require('./parts/calkulator'),
        forms = require('./parts/forms'),
        Slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');
    calkulator();
    blocks();
    forms();
    Slider();
    tabs();
    timer();








});