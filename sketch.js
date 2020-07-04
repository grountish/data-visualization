let slider
let bugs = []; // array of Jitter objects
let bugs2 = []; // array of Jitter objects
let parr
let img
function preload() {
    img = loadImage('./resources/hand.png')
}
function setup() {
    let cnv = createCanvas(800, 400);
    cnv.parent('#data-canvas-container')

    slider = createSlider(0, 216, 0, 1)
    for (let i = 0; i < 216; i++) {
        bugs.push(new Jitter());
    }
    for (let i = 0; i < 90; i++) {
        bugs2.push(new Jitter2());
    }
    slider.style('width', '800px')
    slider.parent('#slider-container')
    slider.class('slider')

}

function draw() {
    strokeWeight(.1)
    background(slider.value(), 89, 100, 40);
    for (let i = 0; i < slider.value(); i++) {
        bugs[i].move();
        bugs[i].display();
    }
    for (let i = 0; i < map(slider.value(), 0, 216, 0, 90); i++) {
        bugs2[i].move();
        bugs2[i].display();
    }
   
}

// Jitter class
class Jitter {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(-5, 50);
        this.speed = random(1);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        fill(255)
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}
class Jitter2 {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(-5, 30);
        this.speed = random(2);
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
        fill(0)
        rect(this.x, this.y, this.diameter, this.diameter);
    }
}

let numOf = document.getElementById('number-of-x');
let numOfY = document.getElementById('number-of-y');

setTimeout(() => {

    let slider1 = document.getElementsByTagName('input')[0]
    slider1.addEventListener('change', () => {
        numOf.innerHTML = '⚪ Boys provided with residential Care = ' + slider1.value;
        numOfY.innerHTML = '⬛ Boys supported through day-care facibilities = ' +floor(map(slider.value(), 0, 216, 0, 90))  ;
    })
}, 1000);