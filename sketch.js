const diam = 2000;
let darts = 0;
let inCircle = 0;
let ratio = 0;
let pie;
let pieDiv;

function setup() {
    // frameRate(1);
    createCanvas(diam, diam);
    background(220);
    strokeWeight(1);
    stroke('red');
    fill('white');
    circle(diam / 2, diam / 2, diam);
    strokeWeight(1);


    // createP("hello").style('font-size', '72pt');
    pieDiv = createDiv().style('font-size', '18pt');
    // pieDiv = createDiv();
    // pieDiv = createDiv(pie);
    // pieDiv.style('font-size', '18pt');

}

function draw() {
    generateDarts(10000);
    stroke(255, 0, 0);
    fill(255, 0, 0, 0);
    circle(diam / 2, diam / 2, diam);
    stroke('red');
    pieDiv.html(`${diam} <br> ${pie} <br> ${darts} <br> ${(PI - pie) * 100 / PI} %`); // JS Template literals
}

function generateDarts(n) {
    let r = diam / 2;
    for (let i = 0; i < n; i++) {
        strokeWeight(1);
        let x = random(0, diam);
        let y = random(0, diam);
        let dartLenght = sqrt((x - r) * (x - r) + (y - r) * (y - r));
        if (dartLenght < r) {
            stroke('red');
            inCircle++;
        } else {
            stroke('black');
        }
        point(x, y);
    }
    ratio = inCircle / (frameCount * n);
    darts += n;
    pie = 4 * ratio;
    // print(pie, (PI - pie) * 100 / PI);
}


// D:\Documents\Probability and Simulation - orig\Probability (tchs)\John McMurrer
// https://medium.com/cantors-paradise/estimating-%CF%80-using-monte-carlo-simulations-3459a84b5ef9