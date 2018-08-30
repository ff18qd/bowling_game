# README
Main Requirements:
The API should be written using Ruby on Rails. In addition, it should provide the following:
l A way to start a new bowling game;
l A way to input the number of pins knocked down by each ball;
l A way to output the current game score (score for each frame and total score).
Imagine that this API will be used by a bowling house. On the screen the user starts the game, then
after each throw the machine, with a sensor, counts how many pins were dropped and calls the API
sending this information. In the meantime the screen is constantly (for example: every 2 seconds)
asking the API for the current game status and displays it.
Logic details
l Bowling is played by throwing a ball down a narrow alley toward ten wooden pins. The objective is
to knock down as many pins as possible per throw.
l The game is played in ten frames. At the beginning of each frame, all ten pins are set up. The
player then gets two tries to knock them all down.
l If the player knocks all the pins down on the first try, it is called a "strike,“ and the frame ends.
l If the player fails to knock down all the pins with his first ball, but succeeds with the second ball, it
is called a "spare“.
l After the second ball of the frame, the frame ends even if there are still pins standing.
l A strike frame is scored by adding ten, plus the number of pins knocked down by the next two
balls, to the score of the previous frame.
l A spare frame is scored by adding ten, plus the number of pins knocked down by the next ball, to
the score of the previous frame.
l Otherwise, a frame is scored by adding the number of pins knocked down by the two balls in the
frame to the score of the previous frame.
l If a strike is thrown in the tenth frame, then the player may throw two more balls to complete the
score of the strike.
l Likewise, if a spare is thrown in the tenth frame, the player may throw one more ball to complete
the score of the spare.
l Thus the tenth frame may have three balls instead of two.
For background information, please see http://en.wikipedia.org/wiki/Ten-pin_bowling


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
