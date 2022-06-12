 /**
  * [
  *  contiene los objetos ball,player1 y player2 que van hacer
  *  los jugadores y la pelota, como se pueden ver estos son instanciados 
  *  con un costructor con la siguiente info
  * ]
  * @version [1,0.0]
  *
  * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
  * @since [1,0,0]
  *
  */

 var limitUp = innerHeight / 5;
 var limitDown = innerHeight - 10;
 let ball = new Ball(innerWidth / 2, innerHeight / 2, 30, 3, limitUp, limitDown);
 let player1 = new Player(1, limitDown / 2, 300, 1000, limitUp, limitDown);
 let player2 = new Player(2, limitDown / 2, 300, 1000, limitUp, limitDown);


 /**
  * [
  *  contiene la clase game donde se encuentra funsion displey 
  *  puntaje, mostrar puntaje y reiniciar 
  * ]
  * @version [1,0.0]
  *
  * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
  */
 class Game {

     display() {
         fill('black');
         stroke('white')
         fill('white');

         ball.display();
         player1.display();
         player2.display();

         this.score();
         this.showScore();
     }

     score() {
         if (ball.getX() < player1.getX()) {
             player2.setScore(1);
             this.restart();
         }
         if (ball.getX() > player2.getX()) {
             player1.setScore(1);
             this.restart();
         }
     }

     showScore() {
         textSize(30);
         text(player1.getScore(), 100, 70);
         text(player2.getScore(), 1150, 70);
     }

     restart() {
         random = Math.random();
         ball.setX(innerWidth / 2);
         ball.setY(innerHeight / 2);
         player1.position();
         player2.position();
     }
 }