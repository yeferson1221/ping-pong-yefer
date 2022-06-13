/**
 * [
 *  contiene la clase player contiene sus costructor funciones(metodos)
 * 
 * ]
 * @version [1,0.0]
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 * @since [1,0,0]
 *
 */
class Player {
    /**
     * [
     *  contiene el constructor de los jugadores
     * ]
     * @version [1,0.0]
     *
     * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
     *
     */

    constructor(player, yInitial, x1, x2, limitUp, limitDown) {
        this.player = player;
        this.yInitial = yInitial;
        this.x1 = x1;
        this.x2 = x2;
        this.limitUp = limitUp;
        this.limitDown = limitDown;

        this.height = 100;
        this.width = 10;
        this.mov = 5;
        this.puntaje = 0;
        this.position();
    }

    /**
     * [
     *  contiene el llamado de los metodos  para pintar el movimiento y la collicion fill blanco
     * ]
     * @version [1,0.0]
     *
     * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
     *
     */
    display() {
        fill('white');
        rect(this.x, this.y, 10, 100);
        this.move();
        this.collision();
    }

    /**
     * [
     *  contiene el metodo de la posicion de los jugadores
     * ]
     * @version [1,0.0]
     *
     * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
     *
     */
    position() {
        if (this.player == 1) {
            this.x = this.x1;
            this.y = this.yInitial;
        } else if (this.player == 2) {
            this.x = this.x2;
            this.y = this.yInitial;
        }
    }


    /**
     * [
     *  contiene el metodo del calculo del movimiento y las instrucciones del teclado
     * ]
     * @version [1,0.0]
     *
     * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
     *
     */
    move() {
        if (this.player == 1) {
            if (keyIsDown(87)) {
                this.y -= this.mov;
            }
            if (keyIsDown(83)) {
                this.y += this.mov;
            }
        } else if (this.player == 2) {
            if (keyIsDown(UP_ARROW)) {
                this.y -= 5;
            }
            if (keyIsDown(DOWN_ARROW)) {
                this.y += 5;
            }
        }
    }

    /**
     * [
     *  contiene el metodo si choca la bolita del juego donde se comparan posiciones
     * ]
     * @version [1,0.0]
     *
     * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
     *
     */
    collision() {
        if (this.y >= this.limitDown - this.height) {
            this.y = this.limitDown - this.height;
        }
        if (this.y <= this.limitUp) {
            this.y = this.limitUp;
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    getPlayer() {
        return this.player;
    }

    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }

    getScore() {
        return this.puntaje;
    }

    setScore(punto) {
        this.puntaje += punto;
    }
}