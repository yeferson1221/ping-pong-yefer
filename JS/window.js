    /**
     * [
     *  se instancia el objeto juego para iniciar ademas contiene el color de la ventana
     *  y la funsion que inicia el juego
     * ]
     * @version [1,0.0]
     *
     * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
     *
     */

    let game = new Game();

    function setup() {
        createCanvas(windowWidth - 20, windowHeight - 20);
    }

    function draw() {
        background('#037167');
        game.display();
    }