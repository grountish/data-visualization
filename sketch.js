let slider
let bugs = []; // array of Jitter objects
let parr

function setup() {
    let cnv = createCanvas(800, 400);
    cnv.parent('#data-canvas-container')

    slider = createSlider(0, 120, 0, 1)
    for (let i = 0; i < 120; i++) {
        bugs.push(new Jitter());
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
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}

let numOf = document.getElementById('number-of-x')

setTimeout(() => {

    let slider1 = document.getElementsByTagName('input')[0]
    slider1.addEventListener('change', () => {
        numOf.innerHTML = 'Number of X = ' + slider1.value
    })


}, 100);