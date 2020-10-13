const diam = 1000;
let digitsOfPie;
let dartWeight = 10;
let darts = 0;
const dartMinimum = 200000;
let inCircle = 0;
let ratio = 0;
let pie = 0;
let pieDiv;
const lowStop = 3.1415;
const highStop = 3.1417;

const batchDarts = 1000;
const drawGraphic = true;

const pieRandomDigits = 3;
// let randomMethod = rndPie; // diam must be 1000
let randomMethod = p5js;

function setup() {
    // frameRate(1);
    if (drawGraphic) {
        createCanvas(diam, diam);
        background(220);
        strokeWeight(1);
        stroke('red');
        fill('white');
        circle(diam / 2, diam / 2, diam);
    }

    pieDiv = createDiv().style('font-size', '24pt');
    digitsOfPie = Array.from(getPie()); // getPie() in pieDigits.js
}

function draw() {

    generateDarts(batchDarts);
    if (drawGraphic) {
        stroke(255, 0, 0);
        fill(255, 0, 0, 0);
        circle(diam / 2, diam / 2, diam);
        stroke('red');
    }
    pieDiv.html(`Diameter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp ${diam} <br> 
                 Batch Darts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp ${batchDarts} <br>
                 Simulated Pie ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp ${nf(pie,1,5)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp ${lowStop}0 - ${highStop}0 <br> 
                 Number of Darts ;&nbsp;&nbsp;&nbsp${darts} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp \> ${dartMinimum} <br>
                 % Deviation ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp${nf((PI - pie) * 100 / PI,1,5)} % <br>
                 randomMethod &nbsp;&nbsp;&nbsp;&nbsp ${randomMethod}`);
    // JS Template literals   ` ackticks above tilde symbol

    if (pie > lowStop && pie < highStop && darts > dartMinimum) {
        noLoop();
    }

}

function generateDarts(n) {
    let r = diam / 2;
    if (drawGraphic) { strokeWeight(dartWeight); }
    for (let i = 0; i < n; i++) {
        let x = randomMethod();
        let y = randomMethod();
        let dartLenght = dist(x, y, r, r);
        // let dartLenght = sqrt((x - r) * (x - r) + (y - r) * (y - r));
        if (dartLenght < r) {
            if (drawGraphic) { stroke('red'); }
            inCircle++;
        } else {
            if (drawGraphic) { stroke('black'); }
        }
        if (drawGraphic) { point(x, y) };
    }
    ratio = inCircle / (frameCount * n);
    darts += n;
    pie = 4 * ratio;

}

function p5js() {
    return random(0, diam);
}

function rndPie() {
    return randomPie(pieRandomDigits);
}


// D:\Documents\Probability and Simulation - orig\Probability (tchs)\John McMurrer
// https://medium.com/cantors-paradise/estimating-%CF%80-using-monte-carlo-simulations-3459a84b5ef9