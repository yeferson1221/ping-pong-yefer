let game = new Game();

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
    background('#037167');
    game.display();
}