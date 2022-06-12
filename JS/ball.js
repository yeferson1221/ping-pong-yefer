var random = Math.random();

/**
 * [
 *  contiene la clase ball donde se encuentra funsion displey 
 *  puntaje, mostrar puntaje y reiniciar 
 * ]
 * @version [1,0.0]
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 * @since [1,0,0]
 *
 */
class Ball {

    constructor(x, y, d, v, limitUp, limitDown) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.speedY = v;
        this.speedX = v;
        this.limitUp = limitUp;
        this.limitDown = limitDown;
    }

    display() {
        fill('white');
        circle(this.x, this.y, this.d);
        this.moveY();
        this.moveX();
        this.hasCollision();
    }

    moveY() {
        if (random > 0.5) {
            this.y += this.speedY;
        } else {
            this.y -= this.speedY;
        }
    }

    moveX() {
        if (random > 0.5) {
            this.x += this.speedX;
        } else {
            this.x -= this.speedX;
        }
    }

    playerBall(jugador, jugadorY, jugadorheight) {
        if (this.y >= jugadorY && this.y <= jugadorY + (jugadorheight / 3)) {
            this.speedY *= -1;
            this.speedX *= -1;
        } else if (this.y >= jugadorY + (jugadorheight / 3) && this.y <= jugadorY + ((jugadorheight / 3) * 2)) {
            this.speedX *= -1;
        } else if (this.y >= jugadorY + ((jugadorheight / 3) * 2) && this.y <= jugadorY + jugadorheight) {
            this.speedY *= -1;
            this.speedX *= -1;
        }
    }

    collision() {
        if (this.x <= (player1.getX() + player1.getWidth()) + (this.d / 2) && this.y >= player1.getY() && this.y <= (player1.getY() + player1.getHeight())) {
            this.playerBall(player2.getPlayer(), player1.getY(), player1.getHeight());
        }

        if (this.x >= player2.getX() - (this.d / 2) && this.y >= player2.getY() && this.y <= (player2.getY() + player2.getHeight())) {
            this.playerBall(player2.getPlayer(), player2.getY(), player2.getHeight());
        }
    }

    hasCollision() {
        this.collision();
        if (this.y >= this.limitDown - (this.d / 2) || this.y <= this.limitUp + (this.d / 2)) {
            this.speedY *= -1;
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
}